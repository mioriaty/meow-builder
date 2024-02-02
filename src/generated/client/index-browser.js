
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.9.0
 * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
 */
Prisma.prismaVersion = {
  client: "5.9.0",
  engine: "23fdc5965b1e05fc54e5f26ed3de66776b93de64"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  avatarUrl: 'avatarUrl',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  role: 'role',
  agencyId: 'agencyId'
};

exports.Prisma.PermissionsScalarFieldEnum = {
  id: 'id',
  email: 'email',
  subAccountId: 'subAccountId',
  access: 'access'
};

exports.Prisma.AgencyScalarFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  customerId: 'customerId',
  name: 'name',
  agencyLogo: 'agencyLogo',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  whiteLabel: 'whiteLabel',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country',
  goal: 'goal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubAccountScalarFieldEnum = {
  id: 'id',
  connectAccountId: 'connectAccountId',
  name: 'name',
  subAccountLogo: 'subAccountLogo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  companyEmail: 'companyEmail',
  companyPhone: 'companyPhone',
  goal: 'goal',
  address: 'address',
  city: 'city',
  zipCode: 'zipCode',
  state: 'state',
  country: 'country',
  agencyId: 'agencyId'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.PipelineScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.LaneScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  pipelineId: 'pipelineId',
  order: 'order'
};

exports.Prisma.TicketScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  laneId: 'laneId',
  order: 'order',
  value: 'value',
  description: 'description',
  customerId: 'customerId',
  assignedUserId: 'assignedUserId'
};

exports.Prisma.TriggerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  triggerId: 'triggerId',
  published: 'published',
  subAccountId: 'subAccountId'
};

exports.Prisma.AutomationInstanceScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  automationId: 'automationId',
  active: 'active'
};

exports.Prisma.ActionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  automationId: 'automationId',
  order: 'order',
  laneId: 'laneId'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  link: 'link',
  subAccountId: 'subAccountId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FunnelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description',
  published: 'published',
  subDomainName: 'subDomainName',
  favicon: 'favicon',
  subAccountId: 'subAccountId',
  liveProducts: 'liveProducts'
};

exports.Prisma.ClassNameScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  funnelId: 'funnelId',
  customData: 'customData'
};

exports.Prisma.FunnelPageScalarFieldEnum = {
  id: 'id',
  name: 'name',
  pathName: 'pathName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  visits: 'visits',
  content: 'content',
  order: 'order',
  previewImage: 'previewImage',
  funnelId: 'funnelId'
};

exports.Prisma.AgencySidebarOptionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  icon: 'icon',
  agencyId: 'agencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubAccountSidebarOptionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  link: 'link',
  icon: 'icon',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  subAccountId: 'subAccountId'
};

exports.Prisma.InvitationScalarFieldEnum = {
  id: 'id',
  email: 'email',
  agencyId: 'agencyId',
  status: 'status',
  role: 'role'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  notification: 'notification',
  agencyId: 'agencyId',
  subAccountId: 'subAccountId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  plan: 'plan',
  price: 'price',
  active: 'active',
  priceId: 'priceId',
  customerId: 'customerId',
  currentPeriodEndDate: 'currentPeriodEndDate',
  subscritiptionId: 'subscritiptionId',
  agencyId: 'agencyId'
};

exports.Prisma.AddOnsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  active: 'active',
  priceId: 'priceId',
  agencyId: 'agencyId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  AGENCY_OWNER: 'AGENCY_OWNER',
  AGENCY_ADMIN: 'AGENCY_ADMIN',
  SUBACCOUNT_USER: 'SUBACCOUNT_USER',
  SUBACCOUNT_GUEST: 'SUBACCOUNT_GUEST'
};

exports.TriggerTypes = exports.$Enums.TriggerTypes = {
  CONTACT_FORM: 'CONTACT_FORM'
};

exports.ActionType = exports.$Enums.ActionType = {
  CREATE_CONTACT: 'CREATE_CONTACT'
};

exports.Icon = exports.$Enums.Icon = {
  settings: 'settings',
  chart: 'chart',
  calendar: 'calendar',
  check: 'check',
  chip: 'chip',
  compass: 'compass',
  database: 'database',
  flag: 'flag',
  home: 'home',
  info: 'info',
  link: 'link',
  lock: 'lock',
  messages: 'messages',
  notification: 'notification',
  payment: 'payment',
  power: 'power',
  receipt: 'receipt',
  shield: 'shield',
  star: 'star',
  tune: 'tune',
  videorecorder: 'videorecorder',
  wallet: 'wallet',
  warning: 'warning',
  headphone: 'headphone',
  send: 'send',
  pipelines: 'pipelines',
  person: 'person',
  category: 'category',
  contact: 'contact',
  clipboardIcon: 'clipboardIcon'
};

exports.InvitationStatus = exports.$Enums.InvitationStatus = {
  ACCEPTED: 'ACCEPTED',
  REVOKED: 'REVOKED',
  PENDING: 'PENDING'
};

exports.Plan = exports.$Enums.Plan = {
  price_1OYxkqFj9oKEERu1NbKUxXxN: 'price_1OYxkqFj9oKEERu1NbKUxXxN',
  price_1OYxkqFj9oKEERu1KfJGWxgN: 'price_1OYxkqFj9oKEERu1KfJGWxgN'
};

exports.Prisma.ModelName = {
  User: 'User',
  Permissions: 'Permissions',
  Agency: 'Agency',
  SubAccount: 'SubAccount',
  Tag: 'Tag',
  Pipeline: 'Pipeline',
  Lane: 'Lane',
  Ticket: 'Ticket',
  Trigger: 'Trigger',
  Automation: 'Automation',
  AutomationInstance: 'AutomationInstance',
  Action: 'Action',
  Contact: 'Contact',
  Media: 'Media',
  Funnel: 'Funnel',
  ClassName: 'ClassName',
  FunnelPage: 'FunnelPage',
  AgencySidebarOption: 'AgencySidebarOption',
  SubAccountSidebarOption: 'SubAccountSidebarOption',
  Invitation: 'Invitation',
  Notification: 'Notification',
  Subscription: 'Subscription',
  AddOns: 'AddOns'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
