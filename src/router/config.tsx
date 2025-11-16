
import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import GCCBenefitsPage from '../pages/gcc-benefits/page';
import GCCOverviewPage from '../pages/gcc-overview/page';
import TermsOfServicePage from '../pages/terms-of-service/page';
import PrivacyPolicyPage from '../pages/privacy-policy/page';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const TechnologyPage = lazy(() => import('../pages/technology/page'));
const LoginPage = lazy(() => import('../pages/login/page'));
const SignupSuccessPage = lazy(() => import('../pages/signup-success/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/technology',
    element: <TechnologyPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup-success',
    element: <SignupSuccessPage />
  },
  {
    path: '/gcc-benefits',
    element: <GCCBenefitsPage />
  },
  {
    path: '/gcc-overview',
    element: <GCCOverviewPage />
  },
  {
    path: '/terms-of-service',
    element: <TermsOfServicePage />
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];

export default routes;
