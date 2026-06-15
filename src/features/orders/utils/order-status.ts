export const ORDER_STATUS = {
  preparing: {
    label: 'Preparing',
    className: `
      bg-orange-50
      border-orange-200
      text-orange-600
    `,
  },

  on_the_way: {
    label: 'On The Way',
    className: `
      bg-blue-50
      border-blue-200
      text-blue-600
    `,
  },

  delivered: {
    label: 'Delivered',
    className: `
      bg-green-50
      border-green-200
      text-green-600
    `,
  },

  done: {
    label: 'Done',
    className: `
      bg-primary/10
      border-primary
      text-primary
    `,
  },

  cancelled: {
    label: 'Cancelled',
    className: `
      bg-muted
      border-border
      text-muted-foreground
    `,
  },
} as const;
