import { Separator } from '~/components-shadcn/separator';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '~/components-shadcn/sidebar';
import { SidebarLeft } from '~/components/sidebar-left';
import { Outlet, useRouteLoaderData } from '@remix-run/react';
import { NavTools } from './nav-tools';
import { SidebarRight } from './sidebar-right';
import { Breadcrumb } from './breadcrumb';
import { loader } from '~/root';

export default function Layout() {
  const { sidebarIsOpen } = useRouteLoaderData<typeof loader>('root');

  return (
    <SidebarProvider open={sidebarIsOpen === 'true'}>
      <SidebarLeft />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb />
          </div>
          <div className="ml-auto px-3">
            <NavTools />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
}
