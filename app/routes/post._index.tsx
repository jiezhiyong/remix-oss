import type { UseTableReturnType } from '@refinedev/react-table';
import {
  Edit,
  Eye,
  Trash2,
  Settings2,
  FileText,
  Copy,
  CornerUpRight,
  CornerUpLeft,
  LineChart,
  GalleryVerticalEnd,
  Trash,
  Bell,
  ArrowUp,
  ArrowDown,
  Star,
  MoreHorizontal,
  Plus,
  Search,
  ChevronRight,
} from 'lucide-react';
import { BaseRecord, HttpError, useDelete, useSelect, useUserFriendlyName } from '@refinedev/core';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { Form, Link, UIMatch, useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import React from 'react';
import { Button } from '~/components-shadcn/button';
import { Calendar } from '~/components-shadcn/calendar';
import { Label } from '~/components-shadcn/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components-shadcn/popover';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInput,
  SidebarSeparator,
  SidebarGroupLabel,
} from '~/components-shadcn/sidebar';
import { HandleFunction } from '~/types/handle';
import { Checkbox } from '~/components-shadcn/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components-shadcn/collapsible';
import { DateRange } from 'react-day-picker';
import { tryParse } from '~/utils/try-parse';
import { useUpdateSearchParams } from '~/hooks/use-update-search-params';
import { useDebounceSubmit } from '~/hooks/use-debounce-submit';
import { getSearchParams } from '~/utils/search-params';
import { getDefaultTitle } from '~/utils/get-default-title';
import PageError from '~/components/500';
import { CreateButton, DeleteButton, EditButton, ListPage, Table, TableFilterProps } from '~/component-refine';
import { parseTableParams } from '@refinedev/remix-router';
import { Category, Post } from '@prisma/client';
import { dataService } from '~/services/data.server';

// 元数据
export const meta: MetaFunction = ({ matches }) => {
  return [{ title: getDefaultTitle(matches) }];
};

// 创建应用程序约定
export const handle: HandleFunction = {
  uiTools: (match: UIMatch, matchs: UIMatch[]) => {
    return <UiTools />;
  },
  uiFilter: (match: UIMatch, matchs: UIMatch[]) => {
    return <UiFilter />;
  },
};

// 处理 GET 请求
export async function loader({ request }: LoaderFunctionArgs) {
  const searchParams = getSearchParams(request);
  const { pagination, filters, sorters } = parseTableParams(new URL(request.url).search);
  const posts = await dataService.getList<Post>({
    resource: 'post',
    filters,
    pagination,
    sorters,
  });

  return { posts };
}

// 处理 POST、PATCH、DELETE 请求
export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const formData = Object.fromEntries(form);
  return {};
}

// UI
export default function PostIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const { data, total } = posts;
  const { mutate: deletePost } = useDelete();
  const navigate = useNavigate();

  return (
    <ul className="space-y-2">
      {/* <CreateButton /> */}
      <Link to="/post/create">
        <Button>Create</Button>
      </Link>
      {data.map((post) => (
        <li key={post.id} className="flex border border-gray-200 p-2">
          <div className="flex-1">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
          <div className="flex gap-2">
            <Link to={`/post/edit/${post.id}`}>
              <Button>Edit</Button>
            </Link>
            <Link to={`/post/show/${post.id}`}>
              <Button>Show</Button>
            </Link>
            <Button
              variant={'destructive'}
              onClick={() => {
                deletePost({ resource: 'post', id: post.id });
                navigate('.');
              }}
            >
              Delete
            </Button>
            {/* <EditButton />
            <DeleteButton /> */}
          </div>
        </li>
      ))}
    </ul>
  );
}

// UI - 导航工具
const dataTools = [
  [
    { label: 'Customize Page', icon: Settings2 },
    { label: 'Turn into wiki', icon: FileText },
  ],
  [
    { label: 'Copy Link', icon: Link },
    { label: 'Duplicate', icon: Copy },
    { label: 'Move to', icon: CornerUpRight },
    { label: 'Move to Trash', icon: Trash2 },
  ],
  [
    { label: 'Undo', icon: CornerUpLeft },
    { label: 'View analytics', icon: LineChart },
    { label: 'Version History', icon: GalleryVerticalEnd },
    { label: 'Show delete pages', icon: Trash },
    { label: 'Notifications', icon: Bell },
  ],
  [
    { label: 'Import', icon: ArrowUp },
    { label: 'Export', icon: ArrowDown },
  ],
];

function UiTools() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchParams] = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

  const starred = Boolean(searchParams.get('starred'));
  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="hidden font-medium text-muted-foreground md:inline-block">Edit Oct 08</div>

      <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => updateSearchParams({ starred: !starred })}>
        <Star className={starred ? 'fill-yellow-400' : ''} />
      </Button>

      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="h-7 w-7 data-[state=open]:bg-accent">
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-lg p-0" align="end">
          <Sidebar collapsible="none" className="bg-transparent">
            <SidebarContent>
              {dataTools.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => {
                        const isActive = Boolean(searchParams.get(item.label));
                        return (
                          <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                              onClick={() => updateSearchParams({ [item.label]: !isActive })}
                              isActive={isActive}
                            >
                              <item.icon /> <span>{item.label}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        );
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}

// UI - 右侧过滤器
const dataFilter = {
  checkbox: [
    {
      title: 'Calendars Type',
      name: 'calendarsType',
      items: [
        { label: 'Personal', id: 'personal' },
        { label: 'Work', id: 'work' },
        { label: 'Family', id: 'family' },
      ],
    },
    {
      title: 'Calendars Favorites',
      name: 'calendarsFavorites',
      items: [
        { label: 'Holidays', id: 'holidays' },
        { label: 'Birthdays', id: 'birthdays' },
      ],
    },
  ],
};

function UiFilter() {
  const [searchParams] = useSearchParams();
  const dateRange = tryParse(searchParams.get('dateRange')) as DateRange;
  const updateSearchParams = useUpdateSearchParams();
  const debounceSubmit = useDebounceSubmit();

  return (
    <Form className="flex flex-1 flex-col" onChange={(event) => debounceSubmit(event)}>
      <SidebarContent>
        <SidebarGroup>
          <div className="relative">
            <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            <Label htmlFor="desc" className="sr-only">
              Search
            </Label>
            <SidebarInput
              type="search"
              id="desc"
              name="desc"
              defaultValue={searchParams.get('desc') || ''}
              placeholder="Search ..."
              className="pl-8"
            />
          </div>
        </SidebarGroup>

        <SidebarGroup className="p-0">
          <Calendar
            className="[&_[role=gridcell]]:w-[33px]"
            mode="range"
            selected={dateRange}
            onSelect={(res) => {
              updateSearchParams({ dateRange: JSON.stringify(res) });
            }}
          />
        </SidebarGroup>

        {dataFilter.checkbox.map((group, index) => (
          <React.Fragment key={group.name}>
            <SidebarSeparator className="mx-0" />
            <SidebarGroup className="py-0">
              <Collapsible defaultOpen={index === 0} className="group/collapsible">
                <SidebarGroupLabel
                  asChild
                  className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger>
                    {group.title}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent className="space-y-2 px-2 py-2">
                  {group.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Checkbox
                        name={group.name}
                        id={item.id}
                        value={item.id}
                        defaultChecked={Boolean(searchParams.getAll(group.name).includes(item.id))}
                      />
                      <Label htmlFor={item.id} className="text-sm font-normal">
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          </React.Fragment>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton type="button">
              <Plus />
              <span>New</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Form>
  );
}

// 错误边界处理
export function ErrorBoundary() {
  return <PageError />;
}
