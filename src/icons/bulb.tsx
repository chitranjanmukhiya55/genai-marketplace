import React from "react"
import { cn } from "../hooks/getVerifyToken"

export const BulbIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      {...props}
       viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 6.575L9.10838 8.125C8.90838 8.46666 9.07505 8.75 9.46672 8.75H10.525C10.925 8.75 11.0834 9.03333 10.8834 9.375L10 10.925"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.91672 15.0333V14.0667C5.00005 12.9083 3.42505 10.65 3.42505 8.25C3.42505 4.125 7.21672 0.891671 11.5 1.825C13.3834 2.24167 15.0334 3.49167 15.8917 5.21667C17.6334 8.71667 15.8 12.4333 13.1084 14.0583V15.025C13.1084 15.2667 13.2 15.825 12.3084 15.825H7.71672C6.80005 15.8333 6.91672 15.475 6.91672 15.0333Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.08325 18.3333C8.99159 17.7917 11.0083 17.7917 12.9166 18.3333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
  )
}
