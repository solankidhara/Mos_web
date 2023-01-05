import {  catagory_icon, dash_icon, Docs_icon, invoice_anal_icon, invoice_icon, pricing_icons, single_file_icon, tags_icons, tax_detail_icon, users_pg_icon } from "./icons";

const sidebarLinks =[
      {
            links : [{
                  icon : dash_icon,
                  title : 'Dashboard',
                  redairect : '/admin/dashboard'
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
                  redairect : '/admin/invoices'
            },{
                  icon : users_pg_icon,
                  title : 'Users',
                  redairect : '/admin/users'
            },{
                  icon : tax_detail_icon,
                  title : 'Tax Details',
                  redairect : '/admin/tax-details'
            },{
                  icon : invoice_anal_icon,
                  title : 'Invoice Anal..',
                  redairect : '/admin/invoice-anal'
            }]
      },
      {
            linksTitle : 'USERS',
            links : [{
                  icon : users_pg_icon,
                  title : 'User Pages',
                  redairect : '/admin/user'
            }]
      },
      {
            linksTitle : 'PAGES',
            links : [{
                  icon : pricing_icons,
                  title : 'Pricing',
                  redairect : '/admin/pricing'
            },{
                  icon : catagory_icon,
                  title : 'Category',
                  redairect : '/admin/categorytable'
            },{
                  icon : tags_icons,
                  title : 'Tags',
                  redairect : '/admin/tags'
            },{
                  icon : tags_icons,
                  title : 'Type Of Content',
                  redairect : '/admin/typeofcontent'
            }]
      },
      {
            linksTitle : 'Help',
            links : [{
                  icon : Docs_icon,
                  title : 'Documentation',
                  redairect : '/admin/documentation'
            }]
      }
];

export default sidebarLinks;