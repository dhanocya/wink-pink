import Image from "next/image"

export default function Bocard({ name, imageSrc }: { name: string, imageSrc: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 w-48 h-48 m-4">
            <div className="relative w-16 h-16 md:w-24 md:h-24">
                <Image
                    src={imageSrc}
                    alt={name}
                    fill
                    className="object-contain p-2 group-hover:scale-110 transition-transform"
                />
            </div>
            <p className="mt-2 font-bold text-xs md:text-sm uppercase tracking-tight text-center px-1">
                {name}
            </p>
        </div>
    )
}