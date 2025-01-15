/* eslint-disable */
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"




const Home = () => {
    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto w-[700px]">
                    <Tabs defaultValue="account" className="border-2 border-gray-2 py-10 px-20">
                        <TabsList className="bg-gray-100 px-10 py-5 w-full">
                            <TabsTrigger value="account" className="px-5">Account</TabsTrigger>
                            <TabsTrigger value="password" className="px-5">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account" className="mt-5 border-2 border-gray-500 p-5 bg-white shadow-2xl">
                            <h3>Account</h3>
                            <p>Make changes to your account here. Click save when you're done.</p>
                            <div className="mt-5">
                                <h5>Name</h5>
                                <form action="">
                                    <input type="text" placeholder='Pedro Duarte' className='outline-none border-2 border-black p-3 rounded-md w-full my-5' />
                                    <h5>Username</h5>
                                    <input type="text" placeholder='@peduarte' className='outline-none border-2 border-black p-3 rounded-md w-full' />
                                </form>
                                <Button className="mt-5">Save Changes</Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="password" className="mt-5 border-2 border-gray-500 p-5 bg-white shadow-2xl">
                            <h3>Password</h3>
                            <p>Make changes to your account here. Click save when you're done.</p>
                            <div className="mt-5">
                                <h5>Current password</h5>
                                <form action="">
                                    <input type="text" className='outline-none border-2 border-black p-3 rounded-md w-full my-5' />
                                    <h5>New password</h5>
                                    <input type="text" className='outline-none border-2 border-black p-3 rounded-md w-full' />
                                </form>
                                <Button className="mt-5">Save password</Button>
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>
            </section>

        </>
    )
}
export default Home