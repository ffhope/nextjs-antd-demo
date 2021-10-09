import { Result, Button } from 'antd'
import Link from 'next/link';
export default function Custom404() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Result
        status="404"
        title={<div style={{ color: "#fff" }}>404</div>}
        subTitle={<div style={{ color: "#fff" }}>Sorry, the page you visited does not exist.</div>}
        extra={
          <Link href={"/"}>
            <a><Button type="primary">Back Home</Button></a>
          </Link>
        }
      />
    </div>
  )
}