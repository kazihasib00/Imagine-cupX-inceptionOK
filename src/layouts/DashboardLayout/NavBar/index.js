/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { useLocation, matchPath } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Drawer,
  Hidden,
  Link,
  List,
  ListSubheader,
  Typography,
  makeStyles,
} from '@material-ui/core'
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined'
import {
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  UserPlus as UserPlusIcon,
  Shield as ShieldIcon,
  AlertCircle as AlertCircleIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  Layout as LayoutIcon,
  Edit as EditIcon,
  DollarSign as DollarSignIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Users as UsersIcon,
} from 'react-feather'
import Logo from '../../../components/Logo'
import NavItem from './NavItem'

const navConfig = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        icon: PieChartIcon,
        href: '/app/reports/dashboard',
      },
    ],
  },
  {
    subheader: 'Management',
    items: [
      {
        title: 'Homeless people',
        icon: UsersIcon,
        href: '/app/management/invoice-list',
        items: [
          {
            title: 'All people',
            href: '/app/management/users',
          },
          {
            title: 'Infograhpic',
            href: '/app/management/infograhpic',
          },
          // {
          //   title: 'Invoices',
          //   href: '/app/management/invoices'
          // },
          // {
          //   title: 'Visits',
          //   href: '/app/management/records'
          // },

          // {
          //   title: 'Records',
          //   href: '/app/management/records'
          // },
        ],
      },
      {
        title: 'Volunteer',
        icon: UsersIcon,
        href: '/app/management/volunteer',
        items: [
          {
            title: 'All Volunteer',
            href: '/app/management/volunteers',
          },
        ],
      },
      {
        title: 'Organizations',
        icon: UsersIcon,
        href: '/app/management/organizations',
        items: [
          {
            title: 'Organization list',
            href: '/app/management/organizations',
          },

          // {
          //   title: 'Memeber list',
          //   href: '/app/management/organizations',
          // },

          // {
          //   title: 'Organization Wallet',
          //   href: '/app/management/wallet-list'
          // },
        ],
      },

      {
        title: 'Donation',
        icon: UsersIcon,
        href: '/app/management/donation',
        items: [
          {
            title: 'Donation',
            href: '/app/management/donation',
          },
          {
            title: 'Donation List',
            href: '/app/management/donation-list',
          },
        ],
      },

      // {
      //   title: 'Chambers',
      //   icon: UsersIcon,
      //   href: '/app/management/chambers',
      //   items: [
      //     {
      //       title: 'All Chambers',
      //       href: '/app/management/chambers'
      //     },
      //   ]
      // },
    ],
  },
]

function renderNavItems({ items, ...rest }) {
  return (
    <List disablePadding>
      {items.reduce(
        (acc, item) => reduceChildRoutes({ acc, item, ...rest }),
        []
      )}
    </List>
  )
}

function reduceChildRoutes({ acc, pathname, item, depth = 0 }) {
  const key = item.title + depth

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false,
    })

    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={key}
        info={item.info}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items,
        })}
      </NavItem>
    )
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={key}
        info={item.info}
        title={item.title}
      />
    )
  }

  return acc
}

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)',
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64,
  },
}))

function NavBar({ openMobile, onMobileClose }) {
  const classes = useStyles()
  const location = useLocation()
  const { user } = useSelector(state => state.account)

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose()
    }
    // eslint-disable-next-line
  }, [location.pathname])

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <Hidden lgUp>
          <Box p={1} display="flex" justifyContent="center">
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </Box>
        </Hidden>
        <Divider />
        <Box p={2}>
          {navConfig.map(config => (
            <List
              key={config.subheader}
              subheader={
                <ListSubheader disableGutters disableSticky>
                  {config.subheader}
                </ListSubheader>
              }
            >
              {renderNavItems({
                items: config.items,
                pathname: location.pathname,
              })}
            </List>
          ))}
        </Box>
      </PerfectScrollbar>
    </Box>
  )

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  )
}

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
}

export default NavBar
