export const metadata = {
  title: 'Work Page',
  description: 'Firebase and Nextjs Web Application'
}
export default function WorkLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>
}
