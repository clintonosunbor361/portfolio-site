export default function Gallery() {
    return (
        <section className="py-0 overflow-hidden border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 h-64">
                <div className="relative group overflow-hidden">
                    <img
                        alt="Abstract network nodes"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtbXRdqKuUvotsfRPSGHHvKrs_F9CFQWflZ9ZSS58BQIbyNOcIpoELkwhHwsIRMtICw6mF0vQA855cYKJY1mXu0jw8feVX8pF3U6dpZ4n4tIIEaYvxw5LRD7evON2Vt8LYgHhS6ssLBXuRClfZPVrzq_IddxJyc5qoYquZN362WAmeV_rglwakRlRWQwm_No2htUMOLbCIIs5w6u9B_p9nLyMZlHAeJ50x1IIDaXJDU2FVdHS2fF3SPVJINHvb3Z5koe79_ROYx2dF"
                    />
                </div>
                <div className="relative group overflow-hidden">
                    <img
                        alt="Typing on keyboard"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuALBLtuahz-RAYanw_GI-iY-znBaR-8lYbDxdx6Mw7YvfCNwg1lzZLVZH261h4QwBYGXwdKhOOmELoFhRZ1pKHjbEZn_3849VrxnKQ7Mh_c8fQDjK8DZ5MumJcW1_ln-4UM8KDWDhOQHooocNV-P3H6831MVMCJdKinsII0ITo6Xo4e295EdLU0eQKLvKtNSUBs1El7CPYI8wnk40r4Q0laLLAOpwvGkfj-5F7AJAcaYzGTiujtZ3xB_aspRcFip024HvbNLn1uTpFS"
                    />
                </div>
                <div className="relative group overflow-hidden bg-black flex items-center justify-center">
                    <div className="text-white text-center p-4">
                        <p className="serif-italic text-2xl">Bridging Gaps</p>
                    </div>
                </div>
                <div className="relative group overflow-hidden">
                    <img
                        alt="Server room hardware"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVyQIenhSFtHVgyZcRqJNVj7oE0Habmvh2s64k9PyK4ZYU7xL2Fd6DiR-HLcBkJz1xDSHfdrKnrQmGHpIlvnFUXShiOzVGI7aihXVhhvmdNU2JkviBKDaoIMS4iHMNyaA4lGPnzb0Jj7HA66iCz71DvQfy1NsvYobq6VBh3aylM3_93VmNwpCPG4mEeKF4v1spv6rU92xTZ0pX7-iBkS_EIvvEpBxryGjdHtqJKF6kdR0eGtn7f228GgsthHpBv0eu2OzCOgRr17sG"
                    />
                </div>
            </div>
        </section>
    );
}
