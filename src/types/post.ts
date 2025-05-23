export interface MetaInfo {
  description: string;
  og_title: string;
  og_image: string;
  og_url: string;
}

export interface Post {
  _id: string;
  name: string;
  url: string;
  created_at: string;
  meta_info: MetaInfo;
}
