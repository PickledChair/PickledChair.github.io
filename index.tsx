export const title = "SuitCase's Site";
export const layout = "main.vto";

type WebServiceName = "X (Twitter)" | "GitHub";

type AccountInfo = { serviceName: WebServiceName, accountName: string, accountLink: string };

const initialAccountInfos: AccountInfo[] = [
  {
    serviceName: "X (Twitter)",
    accountName: "@pickled_chair",
    accountLink: "https://x.com/pickled_chair",
  },
  {
    serviceName: "GitHub",
    accountName: "@PickledChair",
    accountLink: "https://github.com/PickledChair",
  },
];

type BlogInfo = { blogName: string, blogLink: string };

const initialBlogInfo: BlogInfo = {
  blogName: "Chaos in the SuitCase",
  blogLink: "https://blog.pickledchair.com",
};

type BlogInfoViewProps = { blogInfo: BlogInfo };

const BlogInfoView = ({ blogInfo }: BlogInfoViewProps) => (
  <section class="blog">
    <div class="blog-container">
      <h2 class="heading-decoration">Blog</h2>
      <div>
        <a href={ blogInfo.blogLink } target="_blank">
          { blogInfo.blogName }
        </a>
      </div>
    </div>
  </section>
);

type AccountsInfoViewProps = { accountInfos: AccountInfo[] };

const AccountsInfoView = ({ accountInfos }: AccountsInfoViewProps) => (
  <section class="accounts">
    <div class="accounts-container">
      <h2 class="heading-decoration">Accounts</h2>
      {
        accountInfos.map(info => (
          <div>
            { info.serviceName + ": " }<a href={ info.accountLink } target="blank">{info.accountName}</a>
          </div>
        ))
      }
    </div>
  </section>
);

type HeaderViewProps = { title: string };

const HeaderView = ({ title }: HeaderViewProps) => (
  <header class="header">
    <div class="header-container w-container">
      <div class="header-icon-border">
        <img src="img/icon.jpg" alt="SuitCase" width="96" height="96" />
      </div>
      <h1>{ title }</h1>
    </div>
  </header>
);

interface IndexProps {
  title: string;
}

export default (data: IndexProps) => (
  <>
    <HeaderView title={ data.title } />
    <div class="accounts-blog-container w-container">
      <AccountsInfoView accountInfos={initialAccountInfos} />
      <BlogInfoView blogInfo={initialBlogInfo} />
    </div>
  </>
);
