
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Training\\meow-builder\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.9.0",
  "engineVersion": "23fdc5965b1e05fc54e5f26ed3de66776b93de64",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "ZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICAgICA9ICJteXNxbCINCiAgdXJsICAgICAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQ0KICByZWxhdGlvbk1vZGUgPSAicHJpc21hIg0KfQ0KDQpnZW5lcmF0b3IgY2xpZW50IHsNCiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyINCiAgb3V0cHV0ID0gIi4uL3NyYy9nZW5lcmF0ZWQvY2xpZW50Ig0KfQ0KDQplbnVtIFJvbGUgew0KICBBR0VOQ1lfT1dORVINCiAgQUdFTkNZX0FETUlODQogIFNVQkFDQ09VTlRfVVNFUg0KICBTVUJBQ0NPVU5UX0dVRVNUDQp9DQoNCmVudW0gSWNvbiB7DQogIHNldHRpbmdzDQogIGNoYXJ0DQogIGNhbGVuZGFyDQogIGNoZWNrDQogIGNoaXANCiAgY29tcGFzcw0KICBkYXRhYmFzZQ0KICBmbGFnDQogIGhvbWUNCiAgaW5mbw0KICBsaW5rDQogIGxvY2sNCiAgbWVzc2FnZXMNCiAgbm90aWZpY2F0aW9uDQogIHBheW1lbnQNCiAgcG93ZXINCiAgcmVjZWlwdA0KICBzaGllbGQNCiAgc3Rhcg0KICB0dW5lDQogIHZpZGVvcmVjb3JkZXINCiAgd2FsbGV0DQogIHdhcm5pbmcNCiAgaGVhZHBob25lDQogIHNlbmQNCiAgcGlwZWxpbmVzDQogIHBlcnNvbg0KICBjYXRlZ29yeQ0KICBjb250YWN0DQogIGNsaXBib2FyZEljb24NCn0NCg0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nDQogIGF2YXRhclVybCAgICBTdHJpbmcgICAgICAgICBAZGIuVGV4dA0KICBlbWFpbCAgICAgICAgU3RyaW5nICAgICAgICAgQHVuaXF1ZQ0KICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICAgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSAgICAgICBAdXBkYXRlZEF0DQogIHJvbGUgICAgICAgICBSb2xlICAgICAgICAgICBAZGVmYXVsdChTVUJBQ0NPVU5UX1VTRVIpDQogIGFnZW5jeUlkICAgICBTdHJpbmc/DQogIEFnZW5jeSAgICAgICBBZ2VuY3k/ICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYWdlbmN5SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCiAgUGVybWlzc2lvbnMgIFBlcm1pc3Npb25zW10NCiAgVGlja2V0ICAgICAgIFRpY2tldFtdDQogIE5vdGlmaWNhdGlvbiBOb3RpZmljYXRpb25bXQ0KDQogIEBAaW5kZXgoW2FnZW5jeUlkXSkNCn0NCg0KbW9kZWwgUGVybWlzc2lvbnMgew0KICBpZCAgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBlbWFpbCAgICAgICAgU3RyaW5nDQogIFVzZXIgICAgICAgICBVc2VyICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFtlbWFpbF0sIHJlZmVyZW5jZXM6IFtlbWFpbF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBzdWJBY2NvdW50SWQgU3RyaW5nDQogIFN1YkFjY291bnQgICBTdWJBY2NvdW50IEByZWxhdGlvbihmaWVsZHM6IFtzdWJBY2NvdW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCiAgYWNjZXNzICAgICAgIEJvb2xlYW4NCg0KICBAQGluZGV4KFtzdWJBY2NvdW50SWRdKQ0KICBAQGluZGV4KFtlbWFpbF0pDQp9DQoNCm1vZGVsIEFnZW5jeSB7DQogIGlkICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIGNvbm5lY3RBY2NvdW50SWQgU3RyaW5nPyAgICAgICAgICAgICAgIEBkZWZhdWx0KCIiKQ0KICBjdXN0b21lcklkICAgICAgIFN0cmluZyAgICAgICAgICAgICAgICBAZGVmYXVsdCgiIikNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcNCiAgYWdlbmN5TG9nbyAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlRleHQNCiAgY29tcGFueUVtYWlsICAgICBTdHJpbmcgICAgICAgICAgICAgICAgQGRiLlRleHQNCiAgY29tcGFueVBob25lICAgICBTdHJpbmcNCiAgd2hpdGVMYWJlbCAgICAgICBCb29sZWFuICAgICAgICAgICAgICAgQGRlZmF1bHQodHJ1ZSkNCiAgYWRkcmVzcyAgICAgICAgICBTdHJpbmcNCiAgY2l0eSAgICAgICAgICAgICBTdHJpbmcNCiAgemlwQ29kZSAgICAgICAgICBTdHJpbmcNCiAgc3RhdGUgICAgICAgICAgICBTdHJpbmcNCiAgY291bnRyeSAgICAgICAgICBTdHJpbmcNCiAgZ29hbCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgQGRlZmF1bHQoNSkNCiAgdXNlcnMgICAgICAgICAgICBVc2VyW10NCiAgY3JlYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgIEB1cGRhdGVkQXQNCiAgU3ViQWNjb3VudCAgICAgICBTdWJBY2NvdW50W10NCiAgU2lkZWJhck9wdGlvbiAgICBBZ2VuY3lTaWRlYmFyT3B0aW9uW10NCiAgSW52aXRhdGlvbiAgICAgICBJbnZpdGF0aW9uW10NCiAgTm90aWZpY2F0aW9uICAgICBOb3RpZmljYXRpb25bXQ0KICBTdWJzY3JpcHRpb24gICAgIFN1YnNjcmlwdGlvbj8NCiAgQWRkT25zICAgICAgICAgICBBZGRPbnNbXQ0KfQ0KDQptb2RlbCBTdWJBY2NvdW50IHsNCiAgaWQgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIGNvbm5lY3RBY2NvdW50SWQgU3RyaW5nPyAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCgiIikNCiAgbmFtZSAgICAgICAgICAgICBTdHJpbmcNCiAgc3ViQWNjb3VudExvZ28gICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0DQogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICAgICAgIEB1cGRhdGVkQXQNCiAgY29tcGFueUVtYWlsICAgICBTdHJpbmcgICAgICAgICAgICAgICAgICAgIEBkYi5UZXh0DQogIGNvbXBhbnlQaG9uZSAgICAgU3RyaW5nDQogIGdvYWwgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICAgICAgICBAZGVmYXVsdCg1KQ0KICBhZGRyZXNzICAgICAgICAgIFN0cmluZw0KICBjaXR5ICAgICAgICAgICAgIFN0cmluZw0KICB6aXBDb2RlICAgICAgICAgIFN0cmluZw0KICBzdGF0ZSAgICAgICAgICAgIFN0cmluZw0KICBjb3VudHJ5ICAgICAgICAgIFN0cmluZw0KICBhZ2VuY3lJZCAgICAgICAgIFN0cmluZw0KICBBZ2VuY3kgICAgICAgICAgIEFnZW5jeSAgICAgICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2FnZW5jeUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQogIFNpZGViYXJPcHRpb24gICAgU3ViQWNjb3VudFNpZGViYXJPcHRpb25bXQ0KICBQZXJtaXNzaW9ucyAgICAgIFBlcm1pc3Npb25zW10NCiAgRnVubmVscyAgICAgICAgICBGdW5uZWxbXQ0KICBNZWRpYSAgICAgICAgICAgIE1lZGlhW10NCiAgQ29udGFjdCAgICAgICAgICBDb250YWN0W10NCiAgVHJpZ2dlciAgICAgICAgICBUcmlnZ2VyW10NCiAgQXV0b21hdGlvbiAgICAgICBBdXRvbWF0aW9uW10NCiAgUGlwZWxpbmUgICAgICAgICBQaXBlbGluZVtdDQogIFRhZ3MgICAgICAgICAgICAgVGFnW10NCiAgTm90aWZpY2F0aW9uICAgICBOb3RpZmljYXRpb25bXQ0KDQogIEBAaW5kZXgoW2FnZW5jeUlkXSkNCn0NCg0KbW9kZWwgVGFnIHsNCiAgaWQgICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgICBTdHJpbmcNCiAgY29sb3IgICAgICAgIFN0cmluZw0KICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIHN1YkFjY291bnRJZCBTdHJpbmcNCg0KICBTdWJBY2NvdW50IFN1YkFjY291bnQgQHJlbGF0aW9uKGZpZWxkczogW3N1YkFjY291bnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBUaWNrZXQgICAgIFRpY2tldFtdDQoNCiAgQEBpbmRleChbc3ViQWNjb3VudElkXSkNCn0NCg0KbW9kZWwgUGlwZWxpbmUgew0KICBpZCAgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgICBAdXBkYXRlZEF0DQogIExhbmUgICAgICAgICBMYW5lW10NCiAgU3ViQWNjb3VudCAgIFN1YkFjY291bnQgQHJlbGF0aW9uKGZpZWxkczogW3N1YkFjY291bnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBzdWJBY2NvdW50SWQgU3RyaW5nDQoNCiAgQEBpbmRleChbc3ViQWNjb3VudElkXSkNCn0NCg0KbW9kZWwgTGFuZSB7DQogIGlkICAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgbmFtZSAgICAgICBTdHJpbmcNCiAgY3JlYXRlZEF0ICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICBEYXRlVGltZSBAdXBkYXRlZEF0DQogIFBpcGVsaW5lICAgUGlwZWxpbmUgQHJlbGF0aW9uKGZpZWxkczogW3BpcGVsaW5lSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCiAgcGlwZWxpbmVJZCBTdHJpbmcNCiAgVGlja2V0cyAgICBUaWNrZXRbXQ0KICBvcmRlciAgICAgIEludCAgICAgIEBkZWZhdWx0KDApDQoNCiAgQEBpbmRleChbcGlwZWxpbmVJZF0pDQp9DQoNCm1vZGVsIFRpY2tldCB7DQogIGlkICAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgIFN0cmluZw0KICBjcmVhdGVkQXQgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBsYW5lSWQgICAgICBTdHJpbmcNCiAgb3JkZXIgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCkNCiAgTGFuZSAgICAgICAgTGFuZSAgICAgQHJlbGF0aW9uKGZpZWxkczogW2xhbmVJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICB2YWx1ZSAgICAgICBEZWNpbWFsPw0KICBkZXNjcmlwdGlvbiBTdHJpbmc/DQogIFRhZ3MgICAgICAgIFRhZ1tdDQoNCiAgY3VzdG9tZXJJZCBTdHJpbmc/DQogIEN1c3RvbWVyICAgQ29udGFjdD8gQHJlbGF0aW9uKGZpZWxkczogW2N1c3RvbWVySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogU2V0TnVsbCkNCg0KICBhc3NpZ25lZFVzZXJJZCBTdHJpbmc/DQogIEFzc2lnbmVkICAgICAgIFVzZXI/ICAgQHJlbGF0aW9uKGZpZWxkczogW2Fzc2lnbmVkVXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IFNldE51bGwpDQoNCiAgQEBpbmRleChbbGFuZUlkXSkNCiAgQEBpbmRleChbY3VzdG9tZXJJZF0pDQogIEBAaW5kZXgoW2Fzc2lnbmVkVXNlcklkXSkNCn0NCg0KZW51bSBUcmlnZ2VyVHlwZXMgew0KICBDT05UQUNUX0ZPUk0NCn0NCg0KbW9kZWwgVHJpZ2dlciB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgbmFtZSAgICAgICAgIFN0cmluZw0KICB0eXBlICAgICAgICAgVHJpZ2dlclR5cGVzDQogIGNyZWF0ZWRBdCAgICBEYXRlVGltZSAgICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSAgICAgQHVwZGF0ZWRBdA0KICBzdWJBY2NvdW50SWQgU3RyaW5nDQogIFN1YmFjY291bnQgICBTdWJBY2NvdW50ICAgQHJlbGF0aW9uKGZpZWxkczogW3N1YkFjY291bnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBBdXRvbWF0aW9ucyAgQXV0b21hdGlvbltdDQoNCiAgQEBpbmRleChbc3ViQWNjb3VudElkXSkNCn0NCg0KbW9kZWwgQXV0b21hdGlvbiB7DQogIGlkICAgICAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgIEB1cGRhdGVkQXQNCiAgdHJpZ2dlcklkICAgICAgICAgIFN0cmluZz8NCiAgcHVibGlzaGVkICAgICAgICAgIEJvb2xlYW4gICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQ0KICBUcmlnZ2VyICAgICAgICAgICAgVHJpZ2dlcj8gICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3RyaWdnZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBzdWJBY2NvdW50SWQgICAgICAgU3RyaW5nDQogIFN1YmFjY291bnQgICAgICAgICBTdWJBY2NvdW50ICAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbc3ViQWNjb3VudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQogIEFjdGlvbiAgICAgICAgICAgICBBY3Rpb25bXQ0KICBBdXRvbWF0aW9uSW5zdGFuY2UgQXV0b21hdGlvbkluc3RhbmNlW10NCg0KICBAQGluZGV4KFt0cmlnZ2VySWRdKQ0KICBAQGluZGV4KFtzdWJBY2NvdW50SWRdKQ0KfQ0KDQptb2RlbCBBdXRvbWF0aW9uSW5zdGFuY2Ugew0KICBpZCAgICAgICAgICAgU3RyaW5nICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdA0KICBhdXRvbWF0aW9uSWQgU3RyaW5nDQogIEF1dG9tYXRpb24gICBBdXRvbWF0aW9uIEByZWxhdGlvbihmaWVsZHM6IFthdXRvbWF0aW9uSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCiAgYWN0aXZlICAgICAgIEJvb2xlYW4gICAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgQEBpbmRleChbYXV0b21hdGlvbklkXSkNCn0NCg0KZW51bSBBY3Rpb25UeXBlIHsNCiAgQ1JFQVRFX0NPTlRBQ1QNCn0NCg0KbW9kZWwgQWN0aW9uIHsNCiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgbmFtZSAgICAgICAgIFN0cmluZw0KICB0eXBlICAgICAgICAgQWN0aW9uVHlwZQ0KICBjcmVhdGVkQXQgICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0ICAgIERhdGVUaW1lICAgQHVwZGF0ZWRBdA0KICBhdXRvbWF0aW9uSWQgU3RyaW5nDQogIG9yZGVyICAgICAgICBJbnQNCiAgQXV0b21hdGlvbiAgIEF1dG9tYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2F1dG9tYXRpb25JZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBsYW5lSWQgICAgICAgU3RyaW5nICAgICBAZGVmYXVsdCgiMCIpDQoNCiAgQEBpbmRleChbYXV0b21hdGlvbklkXSkNCn0NCg0KbW9kZWwgQ29udGFjdCB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nDQogIGVtYWlsICAgICAgICBTdHJpbmcNCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBzdWJBY2NvdW50SWQgU3RyaW5nDQoNCiAgU3ViYWNjb3VudCBTdWJBY2NvdW50IEByZWxhdGlvbihmaWVsZHM6IFtzdWJBY2NvdW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCiAgVGlja2V0ICAgICBUaWNrZXRbXQ0KDQogIEBAaW5kZXgoW3N1YkFjY291bnRJZF0pDQp9DQoNCm1vZGVsIE1lZGlhIHsNCiAgaWQgICAgICAgICAgIFN0cmluZyAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgdHlwZSAgICAgICAgIFN0cmluZz8NCiAgbmFtZSAgICAgICAgIFN0cmluZw0KICBsaW5rICAgICAgICAgU3RyaW5nICAgICBAdW5pcXVlDQogIHN1YkFjY291bnRJZCBTdHJpbmcNCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQNCiAgU3ViYWNjb3VudCAgIFN1YkFjY291bnQgQHJlbGF0aW9uKGZpZWxkczogW3N1YkFjY291bnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KDQogIEBAaW5kZXgoW3N1YkFjY291bnRJZF0pDQp9DQoNCm1vZGVsIEZ1bm5lbCB7DQogIGlkICAgICAgICAgICAgU3RyaW5nICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCAgICAgRGF0ZVRpbWUgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICAgICBAdXBkYXRlZEF0DQogIGRlc2NyaXB0aW9uICAgU3RyaW5nPw0KICBwdWJsaXNoZWQgICAgIEJvb2xlYW4gICAgICBAZGVmYXVsdChmYWxzZSkNCiAgc3ViRG9tYWluTmFtZSBTdHJpbmc/ICAgICAgQHVuaXF1ZQ0KICBmYXZpY29uICAgICAgIFN0cmluZz8gICAgICBAZGIuVGV4dA0KICBzdWJBY2NvdW50SWQgIFN0cmluZw0KICBTdWJBY2NvdW50ICAgIFN1YkFjY291bnQgICBAcmVsYXRpb24oZmllbGRzOiBbc3ViQWNjb3VudElkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQogIEZ1bm5lbFBhZ2VzICAgRnVubmVsUGFnZVtdDQogIGxpdmVQcm9kdWN0cyAgU3RyaW5nPyAgICAgIEBkZWZhdWx0KCJbXSIpDQogIENsYXNzTmFtZSAgICAgQ2xhc3NOYW1lW10NCg0KICBAQGluZGV4KFtzdWJBY2NvdW50SWRdKQ0KfQ0KDQptb2RlbCBDbGFzc05hbWUgew0KICBpZCAgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIG5hbWUgICAgICAgU3RyaW5nDQogIGNvbG9yICAgICAgU3RyaW5nDQogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICBmdW5uZWxJZCAgIFN0cmluZw0KICBjdXN0b21EYXRhIFN0cmluZz8gIEBkYi5Mb25nVGV4dA0KICBGdW5uZWwgICAgIEZ1bm5lbCAgIEByZWxhdGlvbihmaWVsZHM6IFtmdW5uZWxJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KDQogIEBAaW5kZXgoW2Z1bm5lbElkXSkNCn0NCg0KbW9kZWwgRnVubmVsUGFnZSB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nDQogIHBhdGhOYW1lICAgICBTdHJpbmcgICBAZGVmYXVsdCgiIikNCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICB2aXNpdHMgICAgICAgSW50ICAgICAgQGRlZmF1bHQoMCkNCiAgY29udGVudCAgICAgIFN0cmluZz8gIEBkYi5Mb25nVGV4dA0KICBvcmRlciAgICAgICAgSW50DQogIHByZXZpZXdJbWFnZSBTdHJpbmc/ICBAZGIuVGV4dA0KICBmdW5uZWxJZCAgICAgU3RyaW5nDQogIEZ1bm5lbCAgICAgICBGdW5uZWwgICBAcmVsYXRpb24oZmllbGRzOiBbZnVubmVsSWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCg0KICBAQGluZGV4KFtmdW5uZWxJZF0pDQp9DQoNCm1vZGVsIEFnZW5jeVNpZGViYXJPcHRpb24gew0KICBpZCAgICAgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgbmFtZSAgICAgIFN0cmluZyAgIEBkZWZhdWx0KCJNZW51IikNCiAgbGluayAgICAgIFN0cmluZyAgIEBkZWZhdWx0KCIjIikNCiAgaWNvbiAgICAgIEljb24gICAgIEBkZWZhdWx0KGluZm8pDQogIGFnZW5jeUlkICBTdHJpbmcNCiAgQWdlbmN5ICAgIEFnZW5jeT8gIEByZWxhdGlvbihmaWVsZHM6IFthZ2VuY3lJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCiAgQEBpbmRleChbYWdlbmN5SWRdKQ0KfQ0KDQptb2RlbCBTdWJBY2NvdW50U2lkZWJhck9wdGlvbiB7DQogIGlkICAgICAgICAgICBTdHJpbmcgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBuYW1lICAgICAgICAgU3RyaW5nICAgICAgQGRlZmF1bHQoIk1lbnUiKQ0KICBsaW5rICAgICAgICAgU3RyaW5nICAgICAgQGRlZmF1bHQoIiMiKQ0KICBpY29uICAgICAgICAgSWNvbiAgICAgICAgQGRlZmF1bHQoaW5mbykNCiAgY3JlYXRlZEF0ICAgIERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdA0KICBTdWJBY2NvdW50ICAgU3ViQWNjb3VudD8gQHJlbGF0aW9uKGZpZWxkczogW3N1YkFjY291bnRJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBzdWJBY2NvdW50SWQgU3RyaW5nPw0KDQogIEBAaW5kZXgoW3N1YkFjY291bnRJZF0pDQp9DQoNCmVudW0gSW52aXRhdGlvblN0YXR1cyB7DQogIEFDQ0VQVEVEDQogIFJFVk9LRUQNCiAgUEVORElORw0KfQ0KDQptb2RlbCBJbnZpdGF0aW9uIHsNCiAgaWQgICAgICAgU3RyaW5nICAgICAgICAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBlbWFpbCAgICBTdHJpbmcgICAgICAgICAgIEB1bmlxdWUNCiAgYWdlbmN5SWQgU3RyaW5nDQogIEFnZW5jeSAgIEFnZW5jeSAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2FnZW5jeUlkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpDQogIHN0YXR1cyAgIEludml0YXRpb25TdGF0dXMgQGRlZmF1bHQoUEVORElORykNCiAgcm9sZSAgICAgUm9sZSAgICAgICAgICAgICBAZGVmYXVsdChTVUJBQ0NPVU5UX1VTRVIpDQoNCiAgQEBpbmRleChbYWdlbmN5SWRdKQ0KfQ0KDQptb2RlbCBOb3RpZmljYXRpb24gew0KICBpZCAgICAgICAgICAgU3RyaW5nICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBub3RpZmljYXRpb24gU3RyaW5nDQogIGFnZW5jeUlkICAgICBTdHJpbmcNCiAgc3ViQWNjb3VudElkIFN0cmluZz8NCiAgdXNlcklkICAgICAgIFN0cmluZw0KDQogIFVzZXIgICAgICAgVXNlciAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBBZ2VuY3kgICAgIEFnZW5jeSAgICAgIEByZWxhdGlvbihmaWVsZHM6IFthZ2VuY3lJZF0sIHJlZmVyZW5jZXM6IFtpZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQ0KICBTdWJBY2NvdW50IFN1YkFjY291bnQ/IEByZWxhdGlvbihmaWVsZHM6IFtzdWJBY2NvdW50SWRdLCByZWZlcmVuY2VzOiBbaWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkNCg0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0DQoNCiAgQEBpbmRleChbYWdlbmN5SWRdKQ0KICBAQGluZGV4KFtzdWJBY2NvdW50SWRdKQ0KICBAQGluZGV4KFt1c2VySWRdKQ0KfQ0KDQplbnVtIFBsYW4gew0KICBwcmljZV8xT1l4a3FGajlvS0VFUnUxTmJLVXhYeE4NCiAgcHJpY2VfMU9ZeGtxRmo5b0tFRVJ1MUtmSkdXeGdODQp9DQoNCm1vZGVsIFN1YnNjcmlwdGlvbiB7DQogIGlkICAgICAgICBTdHJpbmcgICBAaWQgQGRlZmF1bHQodXVpZCgpKQ0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpDQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0DQogIHBsYW4gICAgICBQbGFuPw0KICBwcmljZSAgICAgU3RyaW5nPw0KICBhY3RpdmUgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQoNCiAgcHJpY2VJZCAgICAgICAgICAgICAgU3RyaW5nDQogIGN1c3RvbWVySWQgICAgICAgICAgIFN0cmluZw0KICBjdXJyZW50UGVyaW9kRW5kRGF0ZSBEYXRlVGltZQ0KICBzdWJzY3JpdGlwdGlvbklkICAgICBTdHJpbmcgICBAdW5pcXVlDQoNCiAgYWdlbmN5SWQgU3RyaW5nPyBAdW5pcXVlDQogIEFnZW5jeSAgIEFnZW5jeT8gQHJlbGF0aW9uKGZpZWxkczogW2FnZW5jeUlkXSwgcmVmZXJlbmNlczogW2lkXSkNCg0KICBAQGluZGV4KFtjdXN0b21lcklkXSkNCn0NCg0KbW9kZWwgQWRkT25zIHsNCiAgaWQgICAgICAgIFN0cmluZyAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkNCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQNCiAgbmFtZSAgICAgIFN0cmluZw0KICBhY3RpdmUgICAgQm9vbGVhbiAgQGRlZmF1bHQoZmFsc2UpDQogIHByaWNlSWQgICBTdHJpbmcgICBAdW5pcXVlDQogIGFnZW5jeUlkICBTdHJpbmc/DQogIEFnZW5jeSAgICBBZ2VuY3k/ICBAcmVsYXRpb24oZmllbGRzOiBbYWdlbmN5SWRdLCByZWZlcmVuY2VzOiBbaWRdKQ0KDQogIEBAaW5kZXgoW2FnZW5jeUlkXSkNCn0NCg==",
  "inlineSchemaHash": "df121ac2ce6839e3ce0874b909a9cc41e0492ec2edb8a5153621a50144c6b953",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"SUBACCOUNT_USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToUser\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Permissions\",\"relationName\":\"PermissionsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"TicketToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Permissions\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PermissionsToUser\",\"relationFromFields\":[\"email\"],\"relationToFields\":[\"email\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"PermissionsToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"access\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Agency\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connectAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyLogo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"whiteLabel\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zipCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AgencyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"AgencyToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SidebarOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AgencySidebarOption\",\"relationName\":\"AgencyToAgencySidebarOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Invitation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Invitation\",\"relationName\":\"AgencyToInvitation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"AgencyToNotification\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subscription\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Subscription\",\"relationName\":\"AgencyToSubscription\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AddOns\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AddOns\",\"relationName\":\"AddOnsToAgency\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubAccount\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connectAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountLogo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"companyEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"companyPhone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"goal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":5,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zipCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"state\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToSubAccount\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SidebarOption\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccountSidebarOption\",\"relationName\":\"SubAccountToSubAccountSidebarOption\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Permissions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Permissions\",\"relationName\":\"PermissionsToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Funnels\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Funnel\",\"relationName\":\"FunnelToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Media\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Media\",\"relationName\":\"MediaToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Contact\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contact\",\"relationName\":\"ContactToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trigger\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Trigger\",\"relationName\":\"SubAccountToTrigger\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Automation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Automation\",\"relationName\":\"AutomationToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Pipeline\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pipeline\",\"relationName\":\"PipelineToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"SubAccountToTag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Notification\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Notification\",\"relationName\":\"NotificationToSubAccount\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tag\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"SubAccountToTag\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"TagToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Pipeline\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Lane\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lane\",\"relationName\":\"LaneToPipeline\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"PipelineToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Lane\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Pipeline\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pipeline\",\"relationName\":\"LaneToPipeline\",\"relationFromFields\":[\"pipelineId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pipelineId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"LaneToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Ticket\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"laneId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Lane\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lane\",\"relationName\":\"LaneToTicket\",\"relationFromFields\":[\"laneId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tags\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"TagToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Customer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Contact\",\"relationName\":\"ContactToTicket\",\"relationFromFields\":[\"customerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assignedUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Assigned\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"TicketToUser\",\"relationFromFields\":[\"assignedUserId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Trigger\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TriggerTypes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subaccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"SubAccountToTrigger\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Automations\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Automation\",\"relationName\":\"AutomationToTrigger\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Automation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"triggerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Trigger\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Trigger\",\"relationName\":\"AutomationToTrigger\",\"relationFromFields\":[\"triggerId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subaccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"AutomationToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Action\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Action\",\"relationName\":\"ActionToAutomation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AutomationInstance\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AutomationInstance\",\"relationName\":\"AutomationToAutomationInstance\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AutomationInstance\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"automationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Automation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Automation\",\"relationName\":\"AutomationToAutomationInstance\",\"relationFromFields\":[\"automationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Action\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ActionType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"automationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Automation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Automation\",\"relationName\":\"ActionToAutomation\",\"relationFromFields\":[\"automationId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"laneId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Contact\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Subaccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"ContactToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Ticket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Ticket\",\"relationName\":\"ContactToTicket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Media\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Subaccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"MediaToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Funnel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subDomainName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favicon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"FunnelToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FunnelPages\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FunnelPage\",\"relationName\":\"FunnelToFunnelPage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liveProducts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"[]\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ClassName\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ClassName\",\"relationName\":\"ClassNameToFunnel\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ClassName\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"funnelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Funnel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Funnel\",\"relationName\":\"ClassNameToFunnel\",\"relationFromFields\":[\"funnelId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FunnelPage\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pathName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"visits\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previewImage\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"funnelId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Funnel\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Funnel\",\"relationName\":\"FunnelToFunnelPage\",\"relationFromFields\":[\"funnelId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AgencySidebarOption\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Menu\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Icon\",\"default\":\"info\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToAgencySidebarOption\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"SubAccountSidebarOption\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Menu\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Icon\",\"default\":\"info\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"SubAccountToSubAccountSidebarOption\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Invitation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToInvitation\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"InvitationStatus\",\"default\":\"PENDING\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"default\":\"SUBACCOUNT_USER\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Notification\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subAccountId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"NotificationToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToNotification\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SubAccount\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SubAccount\",\"relationName\":\"NotificationToSubAccount\",\"relationFromFields\":[\"subAccountId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Subscription\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"plan\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Plan\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"customerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentPeriodEndDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subscritiptionId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AgencyToSubscription\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AddOns\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"priceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agencyId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Agency\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Agency\",\"relationName\":\"AddOnsToAgency\",\"relationFromFields\":[\"agencyId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"AGENCY_OWNER\",\"dbName\":null},{\"name\":\"AGENCY_ADMIN\",\"dbName\":null},{\"name\":\"SUBACCOUNT_USER\",\"dbName\":null},{\"name\":\"SUBACCOUNT_GUEST\",\"dbName\":null}],\"dbName\":null},\"Icon\":{\"values\":[{\"name\":\"settings\",\"dbName\":null},{\"name\":\"chart\",\"dbName\":null},{\"name\":\"calendar\",\"dbName\":null},{\"name\":\"check\",\"dbName\":null},{\"name\":\"chip\",\"dbName\":null},{\"name\":\"compass\",\"dbName\":null},{\"name\":\"database\",\"dbName\":null},{\"name\":\"flag\",\"dbName\":null},{\"name\":\"home\",\"dbName\":null},{\"name\":\"info\",\"dbName\":null},{\"name\":\"link\",\"dbName\":null},{\"name\":\"lock\",\"dbName\":null},{\"name\":\"messages\",\"dbName\":null},{\"name\":\"notification\",\"dbName\":null},{\"name\":\"payment\",\"dbName\":null},{\"name\":\"power\",\"dbName\":null},{\"name\":\"receipt\",\"dbName\":null},{\"name\":\"shield\",\"dbName\":null},{\"name\":\"star\",\"dbName\":null},{\"name\":\"tune\",\"dbName\":null},{\"name\":\"videorecorder\",\"dbName\":null},{\"name\":\"wallet\",\"dbName\":null},{\"name\":\"warning\",\"dbName\":null},{\"name\":\"headphone\",\"dbName\":null},{\"name\":\"send\",\"dbName\":null},{\"name\":\"pipelines\",\"dbName\":null},{\"name\":\"person\",\"dbName\":null},{\"name\":\"category\",\"dbName\":null},{\"name\":\"contact\",\"dbName\":null},{\"name\":\"clipboardIcon\",\"dbName\":null}],\"dbName\":null},\"TriggerTypes\":{\"values\":[{\"name\":\"CONTACT_FORM\",\"dbName\":null}],\"dbName\":null},\"ActionType\":{\"values\":[{\"name\":\"CREATE_CONTACT\",\"dbName\":null}],\"dbName\":null},\"InvitationStatus\":{\"values\":[{\"name\":\"ACCEPTED\",\"dbName\":null},{\"name\":\"REVOKED\",\"dbName\":null},{\"name\":\"PENDING\",\"dbName\":null}],\"dbName\":null},\"Plan\":{\"values\":[{\"name\":\"price_1OYxkqFj9oKEERu1NbKUxXxN\",\"dbName\":null},{\"name\":\"price_1OYxkqFj9oKEERu1KfJGWxgN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

