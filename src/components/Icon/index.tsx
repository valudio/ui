import React, { SyntheticEvent } from 'react'
import {
  Add,
  AssayAssign,
  Attention,
  Baan,
  Calendar,
  ChangePassword,
  Check,
  Close,
  Customer,
  Dashboard,
  Delete,
  Documents,
  Down,
  Download,
  Edi,
  Edit,
  Error,
  Excel,
  Export,
  ExportEmergency,
  Eye,
  Filter,
  GroupValidation,
  Hide,
  Home,
  Html,
  Ifs,
  Img,
  Info,
  Language,
  Layers,
  Left,
  Legend,
  Less,
  Map,
  Material,
  Menu,
  Ok,
  Pdf,
  PlateView,
  Points,
  Print,
  Projects,
  Received,
  Refresh,
  Reports,
  Right,
  SampleAssign,
  Sap,
  Search,
  Sent,
  Settings,
  Share,
  SignOut,
  Sync,
  TargetView,
  Template,
  Txt,
  Up,
  User,
  Validation,
  ValidationExpert,
  Warning,
  WellView,
  Workers,
  Worksteps,
  Xml
} from '../icons'
import { IBaseProps, IconName } from '../../models'
import StyledSpan from './styles'

interface IProps extends IBaseProps {
  icon: IconName
  onClick?: (event?: MouseEvent) => void
}

const Icon: React.FC<IProps> = ({ isHidden, className, icon, style, onClick }) => {
  const classNames =  `${ className || '' } ${ !!onClick ? 'clickable' : '' } ${ icon }`

  const handleClick = (event: SyntheticEvent) => {
    event.stopPropagation()
    if (onClick && typeof onClick === 'function') onClick()
  }

  const iconSvg = () => {
    switch (icon) {
      case 'add':
        return <Add />
      case 'assay-assign':
        return <AssayAssign />
      case 'attention':
        return <Attention />
      case 'baan':
        return <Baan />
      case 'calendar':
        return <Calendar />
      case 'change-password':
        return <ChangePassword />
      case 'check':
        return <Check />
      case 'close':
        return <Close />
      case 'customer':
        return <Customer />
      case 'dashboard':
        return <Dashboard />
      case 'delete':
        return <Delete />
      case 'documents':
        return <Documents />
      case 'down':
        return <Down />
      case 'download':
        return <Download />
      case 'edi':
        return <Edi />
      case 'edit':
        return <Edit />
      case 'error':
        return <Error />
      case 'excel':
        return <Excel />
      case 'export':
        return <Export />
      case 'export-emergency':
        return <ExportEmergency />
      case 'eye':
        return <Eye />
      case 'filter':
        return <Filter />
      case 'group-validation':
        return <GroupValidation />
      case 'hide':
        return <Hide />
      case 'home':
        return <Home />
      case 'html':
        return <Html />
      case 'ifs':
        return <Ifs />
      case 'img':
        return <Img />
      case 'info':
        return <Info />
      case 'language':
        return <Language />
      case 'layers':
        return <Layers />
      case 'left':
        return <Left />
      case 'legend':
        return <Legend />
      case 'less':
        return <Less />
      case 'map':
        return <Map />
      case 'material':
        return <Material />
      case 'menu':
        return <Menu />
      case 'ok':
        return <Ok />
      case 'pdf':
        return <Pdf />
      case 'plate-view':
        return <PlateView />
      case 'points':
        return <Points />
      case 'print':
        return <Print />
      case 'projects':
        return <Projects />
      case 'received':
        return <Received />
      case 'refresh':
        return <Refresh />
      case 'reports':
        return <Reports />
      case 'right':
        return <Right />
      case 'sample-assign':
        return <SampleAssign />
      case 'sap':
        return <Sap />
      case 'search':
        return <Search />
      case 'sent':
        return <Sent />
      case 'settings':
        return <Settings />
      case 'share':
        return <Share />
      case 'sign-out':
        return <SignOut />
      case 'sync':
        return <Sync />
      case 'target-view':
        return <TargetView />
      case 'template':
        return <Template />
      case 'txt':
        return <Txt />
      case 'up':
        return <Up />
      case 'user':
        return <User />
      case 'validation':
        return <Validation />
      case 'validation-expert':
        return <ValidationExpert />
      case 'warning':
        return <Warning />
      case 'well-view':
        return <WellView />
      case 'workers':
        return <Workers />
      case 'worksteps':
        return <Worksteps />
      case 'xml':
        return <Xml />
      default:
        return null
    }
  }

  if (isHidden) return null
  return (
    <StyledSpan className={ classNames } style={ style } onClick={ handleClick }>
      { iconSvg() }
    </StyledSpan>
  )
}

export default Icon
