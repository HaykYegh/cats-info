'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '@/modules/Cats/store/cats/actions';
import { useSearchParams } from 'next/navigation';
import { catsSelector } from '@/modules/Cats/store/cats/selectors';
import SearchDetails from '@/modules/Cats/components/SearchDetails';
import styles from './CatsContainer.module.css';
import ImageUpload from '@/components/ImageUpload';
import { uploadCatImage } from '@/services/catsApiService';
import toast from 'react-hot-toast';
import Link from 'next/link';

const CatsContainer = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const catsState = useSelector(catsSelector);
  const observer = useRef<null | any>(null);
  const page = useRef<number>(1);
  const size = searchParams?.get('size');
  const mime_types = searchParams?.get('mime_types');
  const order = searchParams?.get('order');
  console.log('catsState -> ', catsState);
  const loadMoreItems = () => {
    console.log('loadMoreItems -> mime_types ', mime_types);
    page.current = page.current + 1;
    dispatch(getCats({ size, mime_types, order, page: page.current }));
  };

  const lastItemRef = useCallback(
    (node: any) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          console.log('entries -> ', entries);
          loadMoreItems();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [size, mime_types, order]
  );

  useEffect(() => {
    dispatch(getCats({ size, mime_types, order }));
    page.current = 1;
  }, [size, mime_types, order]);

  const handleUploadSuccess = (data: any) => {
    console.log('data -> ', data);
    toast.success(`${data.original_filename} uploaded successfully!`);
  };

  const handleUploadError = (error: any) => {
    console.log('error -> ', error);
    toast.error(error.response.data);
  };

  const loaderContainer =
    typeof document !== 'undefined' ? document.getElementById('root') : null;

  return (
    <div className={styles.cats_container}>
      <SearchDetails />
      <ImageUpload
        text="Upload Image"
        handleUploadImage={uploadCatImage}
        handleSuccess={handleUploadSuccess}
        handleError={handleUploadError}
      />

      <div className={styles.imagees_content}>
        {catsState.map((item, index, array) => {
          return (
            <Link
              href={`cat/${item.id}`}
              className={styles.image_item}
              key={index}
              ref={index === array.length - 1 ? lastItemRef : null}
            >
              <img width={200} height={200} src={item.url} alt="cat image" />
              <div className="flex flex-col">
                <p className="text-md">
                  <span className="font-semibold">Breed Name: </span>
                  {item.breeds?.[0]?.name ?? '-'}
                </p>
                <p className="text-md">
                  <span className="font-semibold">Width: </span>
                  {item.width}px
                </p>
                <p className="text-md">
                  <span className="font-semibold">Height: </span>
                  {item.height}px
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CatsContainer;
