import React from 'react'

const DeliveryReturnModal = () => {
  return (
    <>
       <div className="super_main_guide">
        {/* Modal */}
        <div
          className="modal fade"
          id="delivery_return"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg ">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="px-5">
                  <h3>Delivery</h3>
                  <p className="delivery_pss mb-2">
                    We deliver within the UAE with the exception of the far
                    region, which is beyond the boundaries of the courier
                    delivery zone. The delivery cost is 15 AED incl of VAT per
                    bundle. Expected delivery date or time shown on our website
                    is based on an estimate or inaccurate. This is due to a
                    third-party factor that may cause delays. It is unlikely
                    that the packaging of the delivered items will be damaged
                    and this may occur during transit. Shipping fee to Bahrain,
                    Oman and Philippines are subject to delivery rates. Please
                    refer to T&C.
                  </p>
                  <h3>Return</h3>
                  <p className="delivery_pss mb-2">
                    If you are dissatisfied with the order, you may return the
                    items within 3 days after delivery. Return items must
                    conform to the following requirements: The item must remain
                    its weight or pieces as-is. A reduction in weight of the
                    bundle or pieces of items inside the bundle will result in
                    disapproval of your return, nothing should be taken. We do
                    cover the delivery charges for returns. The item must be
                    wrapped in a sack/box and include the label (Color Green
                    Haji sticker). Please refer to our Refund and Returns.
                  </p>
                  <h3>Refund</h3>
                  <p className="delivery_pss mb-2">
                    Once we have received the returned items, it will be subject
                    to a quality check before the refund is processed. It will
                    take 14 to 30 working days to be credited to your wallet or
                    account depending on which refund option you choose.
                  </p>
                  <h3>Help</h3>
                  <p className="delivery_pss mb-2">
                    For any other questions and/or concerns. Email:
                    Support@hajiukayukay.com Phone: +971 6 546 1180
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryReturnModal