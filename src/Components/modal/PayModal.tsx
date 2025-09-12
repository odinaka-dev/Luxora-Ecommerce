import { type Dispatch, type SetStateAction } from "react";
import { Dialog } from "radix-ui";
import { Button } from "../ui/button";
import { MarketplaceImages } from "../../constants/image";

interface Props {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function PaymentModal({ showModal, setShowModal }: Props) {
  return (
    <Dialog.Root
      modal={true}
      defaultOpen={false}
      open={showModal}
      onOpenChange={setShowModal}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[480px] p-6 bg-white rounded-md -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-2xl font-bold capitalize">
            Payment
          </Dialog.Title>
          <Dialog.Description>
            <p className="">Choose your preferred payment option below.</p>
            {/* Bank informations */}
            <BankInformation />
          </Dialog.Description>
          {/* button */}
          <div className="flex flex-row gap-1">
            <Button
              onClick={() => setShowModal(false)}
              className="w-1/2 mt-4 px-4 py-2 bg-gray-300 cursor-pointer rounded"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setShowModal(false)}
              className="w-1/2 mt-4 px-4 py-2 bg-pink-600 cursor-pointer rounded"
            >
              Proceed
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function BankInformation() {
  return (
    <>
      <div className="flex flex-col gap-2 items-start my-6">
        <div className="flex gap-3 items-center">
          <img
            src={MarketplaceImages.Paystack}
            className="w-15 border p-1 rounded-sm"
            alt=""
            loading="lazy"
            aria-placeholder="blur"
          />
          <p className="">Paystack Payment Gateway</p>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={MarketplaceImages.MasterCard}
            className="w-15 border p-1 rounded-sm"
            alt=""
            loading="lazy"
            aria-placeholder="blur"
          />
          <p className="">MasterCard Debit/Credit Card</p>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={MarketplaceImages.Verve}
            className="w-15 border p-1 rounded-sm"
            alt=""
            loading="lazy"
            aria-placeholder="blur"
          />
          <p className="">Verve Debit/Credit Card</p>
        </div>
        <div className="flex gap-3 items-center">
          <img
            src={MarketplaceImages.Stripe}
            className="w-15 border p-1 rounded-sm"
            alt=""
            loading="lazy"
            aria-placeholder="blur"
          />
          <p className="">Stripe Payment Gateway</p>
        </div>
      </div>
    </>
  );
}
