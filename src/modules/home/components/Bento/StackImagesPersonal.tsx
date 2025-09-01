import Stack from '@/src/common/components/elements/StackImages';

const images = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  img: `/images/my.id.jpg`,
  // img: `/images/tuannvq-${i + 1}.jpg`,
}));

const StackImagesPersonal = () => {
  return (
    <div className="flex items-center justify-center pb-2">
      <Stack
        randomRotation={true}
        sensitivity={100}
        sendToBackOnClick={true}
        cardDimensions={{ width: 100, height: 150 }}
        cardsData={images}
      />
    </div>
  );
};

export default StackImagesPersonal;
