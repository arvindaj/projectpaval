import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './componets/ScrollToTop';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';



// Import pages
import Home from './componets/home/home';
import About from './componets/about/about';
import Hire from './componets/hire/hire';
import Contact from './componets/contact/contact';
import AdminLogin from './componets/adminlogin/adminlogin'; // Import the AdminLogin component
import Header from './componets/header/header';
import Footer from './componets/footer/footer';
import Webdevelopment from './componets/webdevelopment/webdevelopment';
import Phpdevelopment from './componets/phpdevelopment/phpdevelopment';
import Crm from './componets/crm/crm';
import Ios from './componets/ios/ios';
import Seo from './componets/seo/seo';
import Dotnetweb from './componets/dotnetweb/dotnetweb';
import Devops from './componets/devops/devops';
import Mobileapp from './componets/mobileapp/mobileapp';
import Ecommerce from './componets/ecommerce/ecommerce';
import Awscloud from './componets/awscloud/awscloud';
import Wordpress from './componets/wordpress/wordpress';
import Android from './componets/android/android';
import IoT from './componets/iot/iot';
import Ai from './componets/ai/ai';
import Ml from './componets/ml/ml';
import Genai from './componets/genai/genai';
import Blockchain from './componets/blockchain/blockchain';
import Digitalmarketing from './componets/dm/dm';
import Contentwriting from './componets/contentwriting/contentwriting';
import Uiux from './componets/uiux/uiux';
import Hirefullstack from './componets/hirefullstack/hirefullstack';
import Hiredm from './componets/hiredm/hiredm';
import Hiremobile from './componets/hiremobile/hiremobile';
import Hirequalityanalyst from './componets/hirequality/hirequality';
import Hireuiux from './componets/hireui/hireui';
import BlogPage from './componets/blog/blog';
import BlogDetails from './componets/blog/blogdetails';
import BlogForm from './componets/blog/blogform';
import AdminBlogList from './componets/blog/AdminBlogList';
import Dashboard from './componets/adminlogin/admindashboard';
import DashBlog from './componets/adminlogin/dashblog';
import AddBlog from './componets/adminlogin/addblog';
import EditBlog from './componets/adminlogin/editblog';






const App = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  //const location = useLocation();

  // Hide header for specific routes
  //const hideHeaderRoutes = ['/admin', '/dashboard', '/dashboard/blogs', '/dashboard/blog/add', 'dashboard/blog/edit/id', 'dashboard/blog/:id'];
  //const showHeader = !hideHeaderRoutes.includes(location.pathname);

  // Hide footer for specific routes
  //const hideFooterRoutes = ['/admin', '/dashboard', '/dashboard/blogs', '/dashboard/blog/add', 'dashboard/blog/edit/id', 'dashboard/blog/:id'];
  //const showFooter = !hideFooterRoutes.includes(location.pathname);

  const location = useLocation();

  // Define the routes where the header and footer should be hidden
  const hideHeaderRoutes = [
    '/admin',
    '/dashboard',
    '/dashboard/blogs',
    '/dashboard/blog/add',
  ];
  const hideFooterRoutes = [...hideHeaderRoutes];

  // Check for dynamic routes like blog view or edit
  const isDynamicBlogRoute = location.pathname.startsWith('/dashboard/blog/edit') ||
    location.pathname.startsWith('/dashboard/blog/');

  // Determine if header and footer should be shown
  const showHeader = !hideHeaderRoutes.includes(location.pathname) && !isDynamicBlogRoute;
  const showFooter = !hideFooterRoutes.includes(location.pathname) && !isDynamicBlogRoute;



  return (
    <>
      {showHeader && <Header scrollToServices={scrollToServices} />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/admin/blogs" element={<AdminBlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/blog/add" element={<AddBlog />} />
          <Route path="blogs" element={<DashBlog />} />
          <Route path="/dashboard/blog/edit/:id" element={<EditBlog />} />
          <Route path="/dashboard/blog/:id" element={<BlogDetails />} />
        </ Route>


        <Route path="/Contact" element={<Contact />} />

        <Route path="/WebDevelopment" element={<Webdevelopment />} />
        <Route path="/IOSDevelopment" element={<Ios />} />
        <Route path="/PhpDevelopment" element={<Phpdevelopment />} />
        <Route path="/DotnetDevelopment" element={<Dotnetweb />} />
        <Route path="/DevOps" element={<Devops />} />
        <Route path="/MobileApplication" element={<Mobileapp />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/AWSCloud" element={<Awscloud />} />
        <Route path="/Wordpress" element={<Wordpress />} />
        <Route path="/Android" element={<Android />} />
        <Route path="/IOT" element={<IoT />} />
        <Route path="/ArtificialIntelligence" element={<Ai />} />
        <Route path="/MachineLearning" element={<Ml />} />
        <Route path="/GenerativeAI" element={<Genai />} />
        <Route path="/Blockchain" element={<Blockchain />} />
        <Route path="/SEO" element={<Seo />} />
        <Route path="/CRM" element={<Crm />} />
        <Route path="/DigitalMarketing" element={<Digitalmarketing />} />
        <Route path="/ContentWriting" element={<Contentwriting />} />
        <Route path="/UiUx" element={<Uiux />} />

        <Route path="/HireFullStack" element={<Hirefullstack />} />
        <Route path="/HireDigitalMarketing" element={<Hiredm />} />
        <Route path="/HireMobileDevelopers" element={<Hiremobile />} />
        <Route path="/HireQualityAnalyst" element={<Hirequalityanalyst />} />
        <Route path="/HireUiUx" element={<Hireuiux />} />

        <Route path="/api/services/Ecommerce" element={<Ecommerce />} />
        <Route path="/api/services/WebDevelopment" element={<Webdevelopment />} />
        <Route path="/api/services/MobileApplication" element={<Mobileapp />} />

        <Route path="/admin" element={<AdminLogin />} /> {/* Admin login route */}
      </Routes>
      {showFooter && <Footer scrollToServices={scrollToServices} />}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
    <ScrollToTop />
  </Router>
);

export default AppWrapper;
