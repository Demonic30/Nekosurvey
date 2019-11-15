import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import Form from "@/pages/Form.vue";
import CreateForm from "@/pages/CreateForm.vue";
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "login",
        name: "Neko Survey",
        component: Login, 
        meta: {
          hideFooter: true,
          hideTopnav: true,
          hidenavbar: true
        } 
      },
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "form",
        name: "Form",
        component: Form
      },
      {
        path: "createform",
        name: "CreateForm",
        component: CreateForm
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;
