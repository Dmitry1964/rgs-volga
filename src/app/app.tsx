import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { Suspense } from 'react';
import Layout from 'src/pages/layout/ui/layout';
import MainPageLazy from 'src/pages/main-page/ui/main-page-lazy';
import RepairPageLazy from 'src/pages/repair-page/ui/repair-page-lazy';
import { Loading } from 'src/shared/loading';
import { ScrollTop } from 'src/shared/scroll-top';
import ServicePageLazy from 'src/pages/service-page/ui/service-page-lazy';
import PageNotFoundLazy from 'src/pages/page-not-found/ui/page-not-found-lazy';
import RvdPageLazy from 'src/pages/rvd-page/ui/rvd-page-lazy';

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
        {
          path: AppRoutes.Sevice,
          element: <ServicePageLazy />,
        },
        {
          path: AppRoutes.Rvd,
          element: <RvdPageLazy />,
        },
        {
          path: AppRoutes.NotFound,
          element: <PageNotFoundLazy />
        }
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;