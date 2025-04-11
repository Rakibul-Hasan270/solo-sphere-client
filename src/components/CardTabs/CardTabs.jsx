import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../Card/Card';

const CardTabs = () => {
    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/jobs`)
            .then(res => {
                // console.log(res.data);
                setCardInfo(res.data);
            })
    }, [])

    return (
        <Tabs>
            <div className='flex justify-center items-center mb-12'>
                <TabList>
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>
            </div>

            <div className='flex justify-center'>
                <TabPanel>
                    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            cardInfo.filter(c => c.category === 'Web Development').map(info => <Card key={info._id} info={info}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            cardInfo.filter(c => c.category === 'Digital Marketing').map(info => <Card key={info._id} info={info}></Card>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            cardInfo.filter(c => c.category === 'Graphic Design').map(info => <Card key={info._id} info={info}></Card>)
                        }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default CardTabs;