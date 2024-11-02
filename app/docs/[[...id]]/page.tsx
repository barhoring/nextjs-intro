type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const DocsPage = ({ params, searchParams }: Props) => {
  return (
    <div>
      Docs Page {JSON.stringify(params)} {JSON.stringify(searchParams)}
    </div>
  )
}

export default DocsPage
