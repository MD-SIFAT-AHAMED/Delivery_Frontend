import React from "react";

const FromParcel = ({
  register,
  errors,
  watch,
  handleSubmit,
  onSubmit,
  allDistrict,
  type,
  senderRegion,
  receiverRegion,
}) => {

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 **:focus:outline-none p-6 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#03373D]">
          Add Parcel
        </h2>
        {/* Parcel Info */}
        <div className="rounded-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#03373D]">
            Enter your parcel Details
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-4 mt-1">
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    value="Document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />{" "}
                  <span className="ml-2">Document</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="radio"
                    value="Non-Document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />{" "}
                  <span className="ml-2">Non-Document</span>
                </label>
              </div>
              {errors.type && (
                <p className="text-red-500 text-sm">Parcel type is required</p>
              )}
            </div>

            <div>
              <label className="font-medium">Parcel Name:</label>
              <input
                type="text"
                placeholder="Parcel Title"
                {...register("title", { required: true })}
                className="input input-bordered w-full mt-1"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">Parcel Name is required</p>
              )}
            </div>

            {type === "Non-Document" && (
              <div>
                <label className="font-medium">Parcel Weight (KG):</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Weight (kg)"
                  {...register("weight")}
                  className="input input-bordered w-full mt-1"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sender & Receiver Wrapper */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-[#03373D] mb-4">
              Sender Details
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Sender Name:</label>
                  <input
                    type="text"
                    placeholder="Sender Name"
                    {...register("senderName", { required: true })}
                    className="input input-bordered w-full mt-1"
                  />
                  {errors.senderName && (
                    <p className="text-red-500 text-sm">
                      Sender name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Sender Contact No:</label>
                  <input
                    type="text"
                    placeholder="Sender Contact"
                    {...register("senderContact", { required: true })}
                    className="input input-bordered w-full mt-1"
                  />
                  {errors.senderContact && (
                    <p className="text-red-500 text-sm">
                      Sender contact is required
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Your Region:</label>
                  <select
                    {...register("senderRegion", { required: true })}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="">Select Region</option>
                    {[
                      ...new Set(
                        allDistrict.map((distirct) => distirct.region)
                      ),
                    ].map((region, i) => (
                      <option key={i} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  {errors.senderRegion && (
                    <p className="text-red-500 text-sm">
                      Sender region is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Service Center:</label>
                  <select
                    {...register("senderCenter", { required: true })}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="">Select Center</option>
                    {allDistrict
                      .filter((district) => district.region === senderRegion)
                      .map((dist, i) => (
                        <option key={i} value={dist.district}>
                          {dist.district}
                        </option>
                      ))}
                  </select>
                  {errors.senderCenter && (
                    <p className="text-red-500 text-sm">
                      Sender center is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="font-medium">Address:</label>
                <input
                  type="text"
                  placeholder="Sender Address"
                  {...register("senderAddress", { required: true })}
                  className="input input-bordered w-full mt-1"
                />
                {errors.senderAddress && (
                  <p className="text-red-500 text-sm">
                    Sender address is required
                  </p>
                )}
              </div>
              <div>
                <label className="font-medium">Pick Up Instruction:</label>
                <input
                  type="text"
                  placeholder="Pick up Instruction"
                  {...register("pickupInstruction", { required: true })}
                  className="input input-bordered w-full mt-1"
                />
                {errors.pickupInstruction && (
                  <p className="text-red-500 text-sm">
                    Pick up instruction is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 rounded-lg">
            <h2 className="text-xl text-[#03373D] font-bold mb-4">
              Receiver Details
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Receiver Name:</label>
                  <input
                    type="text"
                    placeholder="Receiver Name"
                    {...register("receiverName", { required: true })}
                    className="input input-bordered w-full mt-1"
                  />
                  {errors.receiverName && (
                    <p className="text-red-500 text-sm">
                      Receiver name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Receiver Contact No:</label>
                  <input
                    type="text"
                    placeholder="Receiver Contact"
                    {...register("receiverContact", { required: true })}
                    className="input input-bordered w-full mt-1"
                  />
                  {errors.receiverContact && (
                    <p className="text-red-500 text-sm">
                      Receiver contact is required
                    </p>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-medium">Your Region:</label>
                  <select
                    {...register("receiverRegion", { required: true })}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="">Select Region</option>
                    {[
                      ...new Set(
                        allDistrict.map((distirct) => distirct.region)
                      ),
                    ].map((region, i) => (
                      <option key={i} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  {errors.receiverRegion && (
                    <p className="text-red-500 text-sm">
                      Receiver region is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-medium">Service Center:</label>
                  <select
                    {...register("receiverCenter", { required: true })}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="">Select Center</option>
                    {allDistrict
                      .filter((district) => district.region === receiverRegion)
                      .map((dist, i) => (
                        <option key={i} value={dist.district}>
                          {dist.district}
                        </option>
                      ))}
                  </select>
                  {errors.receiverCenter && (
                    <p className="text-red-500 text-sm">
                      Receiver center is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="font-medium">Address:</label>
                <input
                  type="text"
                  placeholder="Receiver Address"
                  {...register("receiverAddress", { required: true })}
                  className="input input-bordered w-full mt-1"
                />
                {errors.receiverAddress && (
                  <p className="text-red-500 text-sm">
                    Receiver address is required
                  </p>
                )}
              </div>
              <div>
                <label className="font-medium">Delivery Instruction:</label>
                <input
                  type="text"
                  placeholder="Delivery Instruction"
                  {...register("deliveryInstruction", { required: true })}
                  className="input input-bordered w-full mt-1"
                />
                {errors.deliveryInstruction && (
                  <p className="text-red-500 text-sm">
                    Delivery instruction is required
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <p className="font-medium">* PickUp Time 4pm-7pm Approx.</p>

        <button
          type="submit"
          className="btn btn-primary !text-gray-700 font-bold w-full"
        >
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default FromParcel;
