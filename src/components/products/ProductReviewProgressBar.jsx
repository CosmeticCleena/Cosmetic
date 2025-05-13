export default function ProductReviewProgressBar({
  totalReviews = 100,
  currentReviews = 70,
  stars,
}) {
  // Calculate percentage for the progress bar
  const percentage = Math.min(
    100,
    Math.max(0, (currentReviews / totalReviews) * 100)
  );

  return (
    <div className="flex items-center gap-3">
      <p className="text-[#644012]">{stars} Sao</p>
      <div className="w-1/4 h-4 mt-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#D1AE62] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-[#D1AE62] text-[20px]">{currentReviews}</p>
    </div>
  );
}
