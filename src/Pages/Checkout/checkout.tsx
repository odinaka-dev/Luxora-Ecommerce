import React, { useState, type Dispatch, type SetStateAction } from "react"; // prettier-ignore

import Header from "../../Components/containers/Header";
import { Card, CardHeader } from "../../Components/ui/card";
import { CardContent } from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Table, TableBody, TableCell } from "../../Components/ui/table";
import { TableHead, TableHeader, TableRow } from "../../Components/ui/table";
import { CHECKOUTHELPERS } from "../../helpers/checkout.helpers";
import { Minus, PencilRuler, Plus, Trash2, X } from "lucide-react";
import { MarketplaceImages } from "../../constants/image";
import PaymentModal from "../../Components/modal/PayModal";

// props that controls the state
interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Checkout() {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <CheckoutContents showModal={showModal} setShowModal={setShowModal} />
      <PaymentModal showModal={showModal} setShowModal={setShowModal} />
    </React.Fragment>
  );
}

function CheckoutContents({ showModal, setShowModal }: Props) {
  return (
    <div className="">
      <div className="h-[30vh] bg-pink-50 mb-8 flex justify-center items-center">
        <h1 className="text-gray-800 font-medium text-4xl">Shopping Cart</h1>
      </div>
      <section className="lg:h-[100vh] max-w-[95%] sm:max-w-[94%]  md:max-w-[88%] lg:max-w-[70%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 items-start">
          <div className="shopping_carts_items">
            {CHECKOUTHELPERS.length >= 100 ? (
              <div className="flex justify-center items-center h-[70vh]">
                <div className="flex flex-col items-center">
                  <img src={MarketplaceImages.EmptCartIcon} alt="empty-cart" />
                  <p className="text-zinc-500 text-center">
                    Empty Cart <br />
                    shop and update your cart
                  </p>
                </div>
              </div>
            ) : (
              <>
                <CheckoutDetails />
                <div className="update_button  flex items-center justify-between gap-3 mt-8 mx-5">
                  <Button className="cursor-pointer rounded-none w-1/4 bg-pink-600">
                    {" "}
                    <PencilRuler />
                    Update cart
                  </Button>
                  <Button className="cursor-pointer rounded-none w-1/4 bg-pink-600">
                    <Trash2 /> Clear cart
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="shopping_carts_checkout flex flex-col justify-center text-center gap-4 w-full">
            <h1>Cart total</h1>
            <CartCheckoutInfo
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckoutDetails() {
  return (
    <div className="">
      <Table>
        <TableHeader className="border-transparent px-4 hover:bg-none cursor-pointer">
          <TableRow className="">
            <TableHead className="text-start text-pink-600 font-semibold">
              Product Details
            </TableHead>
            <TableHead className="text-start text-pink-600 font-semibold">
              Total Quantity
            </TableHead>
            <TableHead className="text-start text-pink-600 font-semibold">
              Product Price
            </TableHead>
            <TableHead className="text-start text-pink-600 font-semibold">
              Total Price
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <div className="max-h-[70vh] overflow-y-auto scroll-smooth w-[100%]">
        <Table className="">
          <TableBody>
            {CHECKOUTHELPERS.map((items, index) => (
              <TableRow key={index} className="py-4 text-start">
                <TableCell className="">
                  <div className="flex flex-col md:flex-row gap-4 relative">
                    <img
                      src={items.productImage}
                      alt=""
                      className="w-24 h-24"
                    />
                    <X
                      size={8}
                      className="bg-black text-white rounded-full h-3 w-3 absolute left-1"
                    />
                    <div>
                      <p>{items.productName}</p>
                      <p>{items.Price}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1 items-center">
                    <Button className="bg-transparent text-black p-0 cursor-pointer hover:text-black hover:bg-zinc-300 duration-300">
                      <Plus />
                    </Button>
                    <span>{items.Quantity}</span>
                    <Button className="bg-transparent text-black p-0 cursor-pointer hover:text-black hover:bg-zinc-300 duration-300">
                      <Minus />
                    </Button>
                  </div>
                </TableCell>
                <TableCell>${items.Price}</TableCell>
                <TableCell>
                  ${Number(items.Price) * Number(items.Quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function CartCheckoutInfo({ setShowModal }: Props) {
  return (
    <>
      <div className="cart-totals">
        <Card className="border-0 shadow-none rounded-none bg-zinc-100 px-4 py-8">
          <CardHeader className="flex justify-between items-center border-b-[0.5px] border-b-zinc-300 pb-3 px-2 ">
            <h1 className="">Subtotals</h1>
            <p>$325.00</p>
          </CardHeader>
          <CardContent className="flex justify-between items-center border-b-[0.5px] border-b-zinc-300 pb-3 px-2 mt-2">
            <h1>Total</h1>
            <p>$325.00</p>
          </CardContent>
          {/* <CardFooter className="px-0">
            <Button
              onClick={() => setShowModal(true)}
              className="w-full bg-pink-600 rounded-none cursor-pointer"
            >
              Checkout
            </Button>{" "}
          </CardFooter> */}
        </Card>
      </div>
      {/* delivery details */}
      <div className="delivery_details mt-8">
        <h1>Shipping Address</h1>
        <form className="bg-zinc-100 py-8 px-4 mt-6">
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Name of Buyer"
              className="rounded-none mb-5 shadow-none border-0 border-b-1"
            />
            <Input
              type="email"
              placeholder="Email address"
              className="rounded-none mb-5 shadow-none border-0 border-b-1"
            />
            <Input
              type="number"
              placeholder="Code of purchase"
              className="rounded-none mb-5 shadow-none border-0 border-b-1"
            />
            <Input
              type="text"
              placeholder="Shipping address"
              className="rounded-none shadow-none mb-5 border-0 border-b-1"
            />
            <Input
              type="text"
              placeholder="Promo code"
              className="rounded-none shadow-none border-0 border-b-1"
            />
          </div>
          <div className=""></div>
          <div className="">
            <Button
              onClick={(e: any) => {
                setShowModal(true);
                e.preventDefault();
              }}
              className="w-full bg-pink-600 rounded-none cursor-pointer"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
