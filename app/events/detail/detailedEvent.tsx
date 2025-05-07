"use client";
import {
  faCalendarDays,
  faCircleCheck,
  faClipboardQuestion,
  faFileArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Image } from "@heroui/react";

export default function EventDetail() {
  return (
    <div className="">
      <div className="rounded-md p-5 shadow mt-3">
        <div className="shadow rounded-md p-3">
          <div className="space-y-5">
            <h1 className="font-bold text-default-700 text-4xl">Digilearn</h1>
            <div className="flex justify-center space-x-1 items-center text-small text-default-500">
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>1/16/2025 14:11</p>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Card background"
                className="object-cover rounded-xl w-full"
                src="https://nextui.org/images/hero-card-complete.jpeg"
              />
            </div>

            <div className="text-default-700 text-justify py-5 md:px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              architecto illum quaerat voluptate enim, beatae labore distinctio
              aut quo debitis officia similique nemo expedita obcaecati modi
              atque magnam asperiores rem provident illo, fuga dicta? Possimus,
              eaque error sed voluptas officiis officia rem quae ipsum aliquam
              necessitatibus, deleniti nemo mollitia quas fuga iure! Velit
              veniam ipsa eligendi, aliquam minus beatae voluptates pariatur vel
              illum perspiciatis. Alias doloremque fugiat cum libero obcaecati
              iusto sed consequatur ducimus voluptatum aliquam quam fuga quis
              corporis ut ullam quasi est magni hic iure harum, labore tenetur
              natus optio voluptas? In eveniet reprehenderit repellat esse
              suscipit est quod labore, quidem distinctio optio deleniti, ipsa
              hic? Nostrum maiores magni ipsa dolor perferendis dicta
              perspiciatis sapiente ab? Molestiae eligendi aspernatur,
              perspiciatis quis explicabo et iusto repellat laudantium velit
              nihil sapiente saepe accusantium placeat unde labore provident
              voluptatum quod harum ducimus cum. Aliquam nesciunt fugiat quam
              accusamus autem quaerat expedita a tempore pariatur modi
              molestiae, tenetur porro soluta libero. Labore aliquid deserunt
              maxime quo ex quia similique sequi, rerum, consequuntur provident
              temporibus! Labore tempore eveniet eius assumenda fuga est
              accusantium temporibus sed at exercitationem quisquam unde
              laborum, odio nam beatae neque nesciunt iste ab quam reprehenderit
              dolorem nemo? Odio tenetur, placeat, obcaecati voluptatibus ea
              sint quibusdam deleniti asperiores maiores inventore dolor nulla
              expedita nobis, ratione labore. Ut, perspiciatis a illum harum
              veritatis reiciendis quos recusandae eum laborum accusantium
              veniam optio at eos porro omnis obcaecati dolore similique, quam
              doloribus, ipsam ipsum enim numquam odio. Commodi, reiciendis!
              Obcaecati facere ab optio autem odit in odio minima, labore nemo
              atque expedita enim ullam eum similique natus dolore ipsam
              molestias reprehenderit officia quae. Officiis velit impedit nobis
              suscipit optio eveniet, quis cupiditate, exercitationem sunt
              excepturi dolorem ipsa omnis ad tempora possimus ipsam similique
              voluptatem harum in odit! Numquam facilis possimus dicta illo
              tenetur aliquid iste quod animi harum amet earum, error aut
              incidunt repudiandae beatae quam eaque, dolorem excepturi cumque
              nesciunt placeat. Eum delectus saepe ut reiciendis magni nostrum
              sit assumenda dicta fuga corporis voluptate, culpa, nemo debitis
              tempora perspiciatis. Inventore soluta magni culpa exercitationem.
              Necessitatibus quidem corporis doloribus cum eveniet. Maiores
              itaque ipsam in exercitationem adipisci velit incidunt, at
              voluptate facere repellat unde soluta sequi, quis perferendis ex
              odit consequuntur! Voluptatem pariatur saepe iure, itaque
              blanditiis et facere voluptate, iste vel, nulla dolor cupiditate
              cumque corrupti provident suscipit consequatur ducimus quod
              doloribus quia deleniti incidunt reprehenderit error? Rerum
              perferendis odio facilis at adipisci officia ab numquam soluta,
              illum est libero optio accusantium nihil cupiditate eligendi eaque
              molestiae repellendus consectetur debitis delectus. Vitae maxime
              quibusdam similique dolorum facere odio esse fugiat, eveniet
              itaque deleniti explicabo ipsam reiciendis dolores provident
              commodi error nobis sequi distinctio natus iure quo tempora ut.
              Earum beatae suscipit nihil adipisci atque laborum dolorum, at
              natus voluptatibus in ab necessitatibus tempore voluptas officiis
              fugiat. Ipsa ipsam et iste vero, omnis aperiam soluta esse?
              Dolores exercitationem tempore alias unde explicabo mollitia
              libero expedita excepturi voluptatum eos, praesentium dignissimos
              modi repellat ipsum maiores itaque impedit magnam obcaecati
              nostrum odio quod omnis. Similique!
            </div>
          </div>

          <div className="p-5 ">
            <Button isDisabled className="text-white font-semibold bg-gradient-to-tr from-amber-500 to-yellow-600">
              Coming soon
            </Button>
            {/* <Button className="text-white font-semibold bg-gradient-to-tr from-green-500 to-cyan-500">
              Register now
            </Button> */}
            {/* <Button isDisabled className="text-white font-semibold bg-gradient-to-tr from-red-500 to-rose-500">
              Registration Closed
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
