import React from 'react';
import {navItems} from "@/constants";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const Navbar = () => {
    return (
        <div className={`flex items-center justify-between`}>
            {navItems.map((item) => (
                <Button variant={"secondary"}>
                    <Link href={item.url} key={item.id}>
                        {item.name}
                    </Link>
                </Button>
            ))}
        </div>
    );
};

export default Navbar; 

