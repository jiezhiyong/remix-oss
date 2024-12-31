import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { authProvider } from '~/provider-auth';

export async function loader({ request }: LoaderFunctionArgs) {
  const { authenticated, redirectTo } = await authProvider.check(request);

  if (!authenticated) {
    throw redirect(redirectTo!);
  }

  return redirect('/dashboard');
}
