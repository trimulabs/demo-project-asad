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
  createData('John Doe', '2022-01-01 10:30 AM', 50.0, 'Pending'),
  createData('Alice Smith', '2022-01-02 12:45 PM', 75.5, 'Completed'),
  createData('Bob Johnson', '2022-01-03 03:15 PM', 30.2, 'Failed'),
  createData('Eva Brown', '2022-01-04 09:00 AM', 100.0, 'Pending'),
  createData('Charlie Wilson', '2022-01-05 11:30 AM', 45.8, 'Completed'),
  createData('Grace Taylor', '2022-01-06 02:00 PM', 80.3, 'Pending'),
  createData('Daniel Harris', '2022-01-07 04:45 PM', 25.0, 'Completed'),
  createData('Olivia Davis', '2022-01-08 08:15 AM', 60.7, 'Failed'),
  createData('Michael Miller', '2022-01-09 01:30 PM', 90.5, 'Pending'),
  createData('Sophia Jackson', '2022-01-10 05:00 PM', 40.2, 'Failed'),
]
