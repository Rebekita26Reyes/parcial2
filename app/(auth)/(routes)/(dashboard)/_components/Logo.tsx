import Image from "next/image";

export const Logo = () => {
    return (
        <Image
            src="https://utfs.io/f/d93ad8ba-953f-41dd-8e69-2eb2eaca1167-xsy4v4.png"
            alt="Logo Next"
            width={70}
            height={70}
            style={{ filter: 'invert(100%)' }}
        />
    )
};
