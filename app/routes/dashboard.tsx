import dataProvider from '@refinedev/simple-rest';
import { data } from '@remix-run/node';
import { accessControlProvider } from '~/accessControlProvider';
import PageError from '~/components/500';
import Layout from '~/components/layout';
import { API_URL } from '~/constants';
import { IPost } from '~/types/demo-post';
import { HandleFunction } from '~/types/handle';

// 创建应用程序约定
export const handle: HandleFunction = {
  from: 'dashboard',
};

export async function loader() {
  const can = accessControlProvider.can({
    resource: 'posts',
    action: 'list',
  });

  if (!can) {
    return data({}, { status: 403 });
  }

  const res = await dataProvider(API_URL).getList<IPost>({
    resource: 'posts',
  });

  return { initialData: res };
}

// UI
export default function Dashboard() {
  return <Layout />;
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
