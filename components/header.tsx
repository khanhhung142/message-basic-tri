import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/dynamic-routing/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/dynamic-routing/post/first">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link href="/dynamic-routing/post/second">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header