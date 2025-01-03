// import { data } from '@remix-run/node';
// import { Form, useActionData, useTransition } from '@remix-run/react';
// import { Queue } from '~/services/queue.server';
// import { sleep } from '~/utils/sleep';

// type QueueData = {
//   emailAddress: string;
// };

// const queue = Queue<QueueData>('notifier', async (job) => {
//   console.log(`Sending email to ${job.data.emailAddress}`);
//   console.log(`Email sent to ${job.data.emailAddress}`);
// });

// export const action: ActionFunction = async ({ request }) => {
//   const formData = await request.formData();
//   const email = formData.get('email');

//   if (!email || typeof email !== 'string' || !email.includes('@')) {
//     return data('Invalid email!', { status: 400 });
//   }

//   // Jobs are queued and not processed immediately.
//   // This function is asynchronous because it is writing
//   // the job to redis for our worker to later pick up.
//   await queue.add('notification email', {
//     emailAddress: email,
//   });

//   return `Email queued for ${email}!`;
// };

// export default function Index() {
//   const actionMessage = useActionData<typeof action>();
//   // const transition = useTransition();

//   return (
//     <main>
//       <Form method="post">
//         <h2>Send an email</h2>
//         <label>
//           <div>Email Address</div>
//           <input name="email" />
//         </label>
//         <div>{/* <button type="submit">{transition.state === 'idle' ? 'Send' : 'Sending'}</button> */}</div>
//       </Form>
//       {actionMessage ? (
//         <p>
//           <b>{actionMessage}</b>
//         </p>
//       ) : null}
//     </main>
//   );
// }
