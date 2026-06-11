import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 25px",
        backgroundColor: "black",
        color: "white",
        width: "98%",
        position: "relative",
        top: "-60px",
        left: "-19px",
        borderBottom: "1px solid #222",
      }}
    >
      <Link href="/" style={{ color: "red", textDecoration: "none", fontSize: "22px" }}>
        NetMirror
      </Link>

      
    </nav>
  );
}