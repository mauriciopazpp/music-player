import Image from "next/image";

const profile = 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp';

export default function DropdownUser() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="dropdown-avatar">
        <div className="w-10 rounded-full">
          <Image
            style={{ objectFit: "cover" }}
            width={40}
            height={40}
            alt="Cover image"
            src={profile}
          />
        </div>
      </div>
      <ul tabIndex={0} className="dropdown-content">
        <li>
          <a href="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </div>
  );
}
