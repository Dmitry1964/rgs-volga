import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Suspense } from 'react';
import Layout from 'src/pages/layout/ui/layout';
import MainPageLazy from 'src/pages/main-page/ui/main-page-lazy';
import RepairPageLazy from 'src/pages/repair-page/ui/repair-page-lazy';
import { Loading } from 'src/shared/loading';
import { ScrollTop } from 'src/shared/scroll-top';

const App = (): React.ReactNode => {
  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout />
          <ScrollTop />
        </>
      ),
      children: [
        {
          path: AppRoutes.Main,
          element: <MainPageLazy />,
        },
        {
          path: AppRoutes.Repair,
          element: <RepairPageLazy />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;