import Home from '@/components/icons/Home'
import Customers from '@/components/icons/Customers'
import OrdersIcon from '@/components/icons/Orders'
import Applications from '@/components/icons/Applications'
import Manifest from '@/components/icons/Manifest'
import Refund from '@/components/icons/Refunds'
import Channel from '@/components/icons/Channels'
import Fulfilment from '@/components/icons/Fulfilment'
import Products from '@/components/icons/Products'
import Team from '@/components/icons/Team'
import Report from '@/components/icons/Report'
import System from '@/components/icons/System'
import Settings from '@/components/icons/Settings'

export const listData1 = [
  { entity: 'Customer Service', content: '08 / 16 / 2023' },
  { entity: 'After hours', content: '(800) 228-0210' },
  { entity: 'Chargeback Department', content: '(818) 540-3407' },
]

export const listData2 = [{ content: 'busa-cs@bankcardusa.com' }]

export const gatewayData = [
  { entity: 'Merchant Name', content: 'ABC Payments' },
  { entity: 'Contact Name', content: 'John Smith' },
  { entity: 'Contact Email', content: 'dummy@coding.io' },
  { entity: 'Contact Phone', content: '+6281234567890' },
  { entity: 'Contact Address', content: 'Jakarta' },
  { entity: 'Contact City', content: 'Jakarta' },
  { entity: 'Merchant ID', content: '4069500400011342' },
]

export const gatewayDetail = [
  { entity: 'API Login ID', content: '8C6ZRzFm58jr' },
  {
    entity: 'API transaction key',
    content: 'zaCELgL. 0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
  },
]
interface IconProps {
  color: string
}

export const SIDEBAR_MENU = [
  {
    title: 'Testing',
    Icon: ({ color }: IconProps) => <Home color={color} />,
    link: '/leads',
  },
  {
    title: 'Customers',
    Icon: ({ color }: IconProps) => <Customers color={color} />,
    link: '/customers',
  },
  {
    title: 'Orders',
    Icon: ({ color }: IconProps) => <OrdersIcon color={color} />,
    link: '/orders',
  },

  {
    title: 'Applications',
    Icon: ({ color }: IconProps) => <Applications color={color} />,
    link: '/applications',
  },
  {
    title: 'Manifest',
    Icon: ({ color }: IconProps) => <Manifest color={color} />,
    link: '/manifest',
  },
  {
    title: 'Refunds',
    Icon: ({ color }: IconProps) => <Refund color={color} />,
    link: '/refunds',
  },
  {
    title: 'Channels',
    Icon: ({ color }: IconProps) => <Channel color={color} />,
    link: '/channels',
  },
  {
    title: 'Products',
    Icon: ({ color }: IconProps) => <Products color={color} />,
    link: '/products',
  },
  {
    title: 'Fulfilment',
    Icon: ({ color }: IconProps) => <Fulfilment color={color} />,
    link: '/fulfilment',
  },
  {
    title: 'Team',
    Icon: ({ color }: IconProps) => <Team color={color} />,
    link: '/team',
  },
  {
    title: 'Reports',
    Icon: ({ color }: IconProps) => <Report color={color} />,
    link: '/reports',
  },
  {
    title: 'System',
    Icon: ({ color }: IconProps) => <System color={color} />,
    link: '/system',
  },
  {
    title: 'Settings',
    Icon: ({ color }: IconProps) => <Settings color={color} />,
    link: '/settings',
  },
]

interface TableDataType {
  name: string
  dateTime: string
  amount: number
  status: string
}

const createData = (
  name: string,
  dateTime: string,
  amount: number,
  status: string
): TableDataType => {
  return { name, dateTime, amount, status }
}

export const TransactionTableRows: TableDataType[] = [
  createData('John Doe', '12/28/2023, 10:30:00', 2500, 'Pending'),
  createData('Alice Smith', '12/28/2023, 12:45:00', 3750.5, 'Approved'),
  createData('Bob Johnson', '12/28/2023, 15:15:00', 1200.2, 'Declined'),
  createData('Eva Brown', '12/28/2023, 09:00:00', 5000.0, 'Pending'),
  createData('Charlie Wilson', '12/28/2023, 11:30:00', 4580.8, 'Approved'),
  createData('Grace Taylor', '12/28/2023, 14:00:00', 8030.3, 'Pending'),
  createData('Daniel Harris', '12/28/2023, 16:45:00', 2500.0, 'Approved'),
  createData('Olivia Davis', '12/28/2023, 08:15:00', 6070.7, 'Declined'),
  createData('Michael Miller', '12/28/2023, 13:30:00', 9050.5, 'Pending'),
  createData('Sophia Jackson', '12/28/2023, 17:00:00', 4020.2, 'Declined'),
]
