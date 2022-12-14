import {  catagory_icon, dash_icon, Docs_icon, invoice_anal_icon, invoice_icon, pricing_icons, single_file_icon, tags_icons, tax_detail_icon, users_pg_icon } from "./icons";

const sidebarLinks =[
      {
            links : [{
                  icon : dash_icon,
                  title : 'Dashboard',
                  redairect : '/admin/dashboard'
            },{
                  icon : dash_icon,
                  title : 'Catogory Table',
                  redairect : '/admin/categorytable'
            },{
                  icon : dash_icon,
                  title : 'List of Content',
                  redairect : '/admin/listofcontent'
            }
      ]
      },
      {
            linksTitle : 'Uploading',
            links : [
                  {
                  icon : single_file_icon,
                  title : 'Single File',
                  items : [{
                        icon : dash_icon,
                        title : 'Test1',
                        redairect : '/admin/test1'
                  },{
                        
                        icon : dash_icon,
                        title : 'Test2',
                        redairect : '/admin/test2'
                  }]
            }
            // ,{
            //       icon : bulk_file_icom,
            //       title : 'Bulk File',
            //       redairect : '/admin/test2'
            // }
      ]
      },
      {
            linksTitle : 'Account',
            links : [{
                  icon : invoice_icon,
                  title : 'Invoices',
                  redairect : '/admin/dashboard'
            },{
                  icon : users_pg_icon,
                  title : 'Users',
                  redairect : '/admin/dashboard'
            },{
                  icon : tax_detail_icon,
                  title : 'Tax Details',
                  redairect : '/admin/dashboard'
            },{
                  icon : invoice_anal_icon,
                  title : 'Invoice Anal..',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'USERS',
            links : [{
                  icon : users_pg_icon,
                  title : 'User Pages',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'PAGES',
            links : [{
                  icon : pricing_icons,
                  title : 'Pricing',
                  redairect : '/admin/dashboard'
            },{
                  icon : catagory_icon,
                  title : 'Category',
                  redairect : '/admin/dashboard'
            },{
                  icon : tags_icons,
                  title : 'Tags',
                  redairect : '/admin/dashboard'
            },{
                  icon : tags_icons,
                  title : 'Content',
                  redairect : '/admin/dashboard'
            }]
      },
      {
            linksTitle : 'Help',
            links : [{
                  icon : Docs_icon,
                  title : 'Documentation',
                  redairect : '/admin/dashboard'
            }]
      }
];

export default sidebarLinks;