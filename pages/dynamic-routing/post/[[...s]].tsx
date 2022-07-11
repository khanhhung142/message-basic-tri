import { useRouter } from 'next/router'
import Header from '../../../components/header'

const Comment = () => {
  const router = useRouter()
  const s = (router.query.s as string[]) || []
  // console.log(s)
  return (
    <>
      {/* <Header /> */}
      <h1>Slug: {s.join('/')}</h1>
    </>
  )
}

export default Comment