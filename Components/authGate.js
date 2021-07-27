// import { useAuth } from '@nhost/react-auth';

// export function PrivateRoute(Component) {
//   return () => {
//     const { signedIn } = useAuth();

//     // wait to see if the user is logged in or not.
//     if (signedIn === null) {
//       return <div>Checking auth...</div>;
//     }

//     if (!signedIn) {
//       return <div>Login form or redirect to `/login`.</div>;
//     }

//     return <Component {...arguments} />;
//   };
// }
