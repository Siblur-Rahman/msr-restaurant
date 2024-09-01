import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../shared/Cover/Cover";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
    const categories = ["salad", "pizza", "soup","dessert", "drinks"]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const drinks = menu.filter(item => item.category === "drinks");
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    return (
        <div>
            <Helmet>
                    <title>Order</title>
            </Helmet>
           <Cover img={orderCoverImg} title={'Order food'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reiciendis nam incidunt debitis iste ex ullam exercitationem facilis maiores sapiente quasi rerum. Placeat cumque, quas amet sapiente fuga vero suscipit sunt architecto quod est doloribus quasi provident deleniti modi animi omnis voluptas totam illum natus. Sapiente cumque numquam sint unde.'}/>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(tabIndex)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}/>
                    </TabPanel>
                </Tabs>
        </div>
    );
};

export default Order;
