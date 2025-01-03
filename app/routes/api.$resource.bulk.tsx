import { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import { dataService } from '~/services/data.server';

// 处理批量获取请求 getMany
export async function loader({ request, params }: LoaderFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  try {
    const url = new URL(request.url);
    const ids = url.searchParams.get('ids');

    if (!ids) {
      throw new Error('批量获取时 ids 参数是必需的');
    }

    const data = await dataService.getMany!({
      resource,
      ids: ids.split(','),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

// 处理批量操作请求
export async function action({ request, params }: ActionFunctionArgs) {
  const { resource } = params;
  if (!resource) {
    throw new Error('资源类型是必需的');
  }

  try {
    const method = request.method;
    const body = await request.json();

    switch (method) {
      // 批量创建 createMany
      case 'POST': {
        const { variables } = body;
        const data = await dataService.createMany!({
          resource,
          variables,
        });
        return Response.json(data);
      }

      // 批量更新 updateMany
      case 'PUT': {
        const { ids, variables } = body;
        if (!ids) {
          throw new Error('批量更新时 ids 是必需的');
        }
        const data = await dataService.updateMany!({
          resource,
          ids,
          variables,
        });
        return Response.json(data);
      }

      // 批量删除 deleteMany
      case 'DELETE': {
        const { ids } = body;
        if (!ids) {
          throw new Error('批量删除时 ids 是必需的');
        }
        const data = await dataService.deleteMany!({
          resource,
          ids,
        });
        return Response.json(data);
      }

      default:
        throw new Error(`不支持的请求方法: ${method}`);
    }
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}