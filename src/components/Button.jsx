import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 hover:text-primary-100 active:bg-primary-800 active:text-primary-300 focus-visible:outline-primary-900',
    blue: 'bg-blue-600 text-white hover:text-primary-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
    white:
      'bg-white text-primary-900 hover:bg-blue-50 active:bg-blue-200 active:text-primary-600 focus-visible:outline-white',
  },
  outline: {
    primary:
      'ring-primary-600 text-primary-700 hover:text-primary-900 hover:ring-primary-900 active:bg-primary-100 active:text-primary-600 focus-visible:outline-blue-600 focus-visible:ring-primary-900',
    white:
      'ring-primary-700 text-white hover:ring-primary-500 active:ring-primary-700 active:text-primary-400 focus-visible:outline-white',
  },
}

export function Button({
  variant = 'solid',
  color = 'primary',
  className,
  ...props
}) {
  return (
    <button
      className={clsx(
        baseStyles[variant],
        variantStyles[variant][color],
        className
      )}
      {...props}
    />
  )
}

export function ButtonLink({
  variant = 'solid',
  color = 'primary',
  href,
  className,
  ...props
}) {
  return (
    <Link href={href}>
      <a
        className={clsx(
          baseStyles[variant],
          variantStyles[variant][color],
          className
        )}
        {...props}
      />
    </Link>
  )
}
