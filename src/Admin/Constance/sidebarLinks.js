import { bulk_file_icom, catagory_icon, dash_icon, Docs_icon, invoice_anal_icon, invoice_icon, pricing_icons, single_file_icon, tags_icons, tax_detail_icon, users_icon, users_pg_icon } from "./icons";

const sidebarLinks =[
      {
            links : [{
                  dropdown: false,
                  icon : dash_icon,
                  title : 'Dashboard',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'Uploading',
            links : [
                  {
                  dropdown: true,
                  icon : single_file_icon,
                  title : 'Single File',
                  items : [{
                        icon : dash_icon,
                        title : 'Dashboard',
                        redairect : '/admin/dashboard'
                  },{
                        
                        icon : dash_icon,
                        title : 'Dashboard',
                        redairect : '/admin/dashboard'
                  }]
            }
            ,{
                  dropdown: false,
                  icon : bulk_file_icom,
                  title : 'Bulk File',
                  redairect : '/admin/test2'
            }]
      },
      {
            linksTitle : 'Account',
            links : [{
                  dropdown: false,
                  icon : invoice_icon,
                  title : 'Invoices',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : users_pg_icon,
                  title : 'Users',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : tax_detail_icon,
                  title : 'Tax Details',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : invoice_anal_icon,
                  title : 'Invoice Anal..',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'USERS',
            links : [{
                  dropdown: false,
                  icon : users_pg_icon,
                  title : 'User Pages',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'PAGES',
            links : [{
                  dropdown: false,
                  icon : pricing_icons,
                  title : 'Pricing',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : catagory_icon,
                  title : 'Category',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : tags_icons,
                  title : 'Tags',
                  redairect : '/admin/dashboard'
            },{
                  dropdown: false,
                  icon : tags_icons,
                  title : 'Content',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'Help',
            links : [{
                  dropdown: false,
                  icon : Docs_icon,
                  title : 'Documentation',
                  redairect : '/admin/dashboard'
            }]
      }
];

export default sidebarLinks;