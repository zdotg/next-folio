import Link from "next/link";

export default function Experience() {
    return (
        <div>
            <h1>Experience</h1>
            <Link href="/experience/academic"> Academic </Link>
            <Link href="/experience/certificates"> Certificates </Link>
            <Link href="/experience/skills"> Skills </Link>
            <Link href="/experience/work"> Work </Link>
        </div>
    )
}