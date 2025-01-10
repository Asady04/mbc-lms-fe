import { title } from "@/components/primitives";
import logoImage from '@/assets/MBC logo.png';

export default function AboutPage() {
  return (
    <div>
      <div className="pt-3">
        <img src={logoImage.src} className="w-full h-full object-cover" />
      </div>
      <div className="pt-6">
        <h1 className={title()}>About us</h1>
      </div>
    </div>
  );
}
