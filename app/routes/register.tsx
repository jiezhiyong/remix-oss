import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';
import { z } from 'zod';
import { createUserSession } from '~/services/session.server';
import { createUser, getUserByEmail } from '~/models/user.server';
import { safeRedirect } from '~/utils/safe-redirect';
import { RegisterForm } from '~/components/form-register';
import { typedFormError } from '~/utils/typed-form-error';

// 定义表单验证 schema
const registerSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  password: z.string().min(6, '密码至少需要6个字符').max(50, '密码不能超过50个字符'),
  redirectTo: z.string().optional(),
});

// 元数据
export const meta: MetaFunction = () => {
  return [{ title: 'Register' }];
};

// Action 处理函数
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const rawData = Object.fromEntries(formData) as z.infer<typeof registerSchema>;

  try {
    const { email, password } = registerSchema.parse(rawData);
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw { email: ['A user already exists with this email.'] };
    }

    const user = await createUser(email, password);
    return createUserSession({
      redirectTo: safeRedirect(rawData.redirectTo),
      request,
      userId: user.id,
    });
  } catch (error) {
    return typedFormError(error);
  }
}

// UI
export default function Register() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
