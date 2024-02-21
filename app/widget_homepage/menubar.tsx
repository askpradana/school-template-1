"use client"
import { Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import { CaretDownIcon } from "@radix-ui/react-icons";

export default function MenuBar() {
    return <div className='flex justify-center gap-12 px-12 mt-12'>
        <Text className='cursor-pointer'>
            Beranda
        </Text>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                {/* <Button variant="solid" size="1"> */}
                <Flex className='items-center cursor-pointer'>
                    Profil Sekolah
                    <CaretDownIcon />
                </Flex>
                {/* </Button> */}
            </DropdownMenu.Trigger>

            <DropdownMenu.Content>
                <DropdownMenu.Item>Visi & Misi</DropdownMenu.Item>
                <DropdownMenu.Item>Struktural Sekolah</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Profil Guru</DropdownMenu.Item>

                <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>Ekskul</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                        <DropdownMenu.Item>Ekskul 1</DropdownMenu.Item>
                        <DropdownMenu.Item>Ekskul 2</DropdownMenu.Item>
                        <DropdownMenu.Item>Ekskul 3</DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                </DropdownMenu.Sub>
            </DropdownMenu.Content>
        </DropdownMenu.Root>

        <Text className='cursor-pointer'>
            Informasi
        </Text>

        <Text className='cursor-pointer'>
            Galeri
        </Text>

    </div>
}