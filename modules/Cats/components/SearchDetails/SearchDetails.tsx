import Switcher from '@/components/Switcher';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import ImageUpload from '@/components/ImageUpload';
import { uploadCatImage } from '@/services/catsApiService';
import toast from 'react-hot-toast';
import Label from '@/components/Label';
import styles from './SearchDetails.module.css';

const sizeOptions = ['all', 'gif', 'png', 'jpg'];
const mimeTypesOptions = ['all', 'small', 'med', 'full'];
const orderOptions = ['RANDOM', 'DESC', 'ASC'];
const SearchDetails = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value === 'all') {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );
  const handleSwitchChange = (newOption: string, name?: string) => {
    router.push(pathname + '?' + createQueryString(name as string, newOption));
  };

  return (
    <div className={styles.search_header}>
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <Label text="Choose mime type" />
        <Switcher
          value={searchParams?.get('mime_types')}
          name="mime_types"
          options={sizeOptions}
          onSwitchChange={handleSwitchChange}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <Label text="Choose size" />
        <Switcher
          value={searchParams?.get('size')}
          name="size"
          options={mimeTypesOptions}
          onSwitchChange={handleSwitchChange}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-2">
        <Label text="Choose order" />
        <Switcher
          value={searchParams?.get('order')}
          name="order"
          options={orderOptions}
          onSwitchChange={handleSwitchChange}
        />
      </div>
    </div>
  );
};

export default SearchDetails;
