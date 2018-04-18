﻿DECLARE @CurrentMigration [nvarchar](max)

IF object_id('[dbo].[__MigrationHistory]') IS NOT NULL
    SELECT @CurrentMigration =
        (SELECT TOP (1) 
        [Project1].[MigrationId] AS [MigrationId]
        FROM ( SELECT 
        [Extent1].[MigrationId] AS [MigrationId]
        FROM [dbo].[__MigrationHistory] AS [Extent1]
        WHERE [Extent1].[ContextKey] = N'Vidzy.Migrations.Configuration'
        )  AS [Project1]
        ORDER BY [Project1].[MigrationId] DESC)

IF @CurrentMigration IS NULL
    SET @CurrentMigration = '0'

IF @CurrentMigration < '201804171912075_InitialModel'
BEGIN
    CREATE TABLE [dbo].[Genres] (
        [Id] [int] NOT NULL IDENTITY,
        [Name] [nvarchar](max),
        CONSTRAINT [PK_dbo.Genres] PRIMARY KEY ([Id])
    )
    CREATE TABLE [dbo].[Videos] (
        [Id] [int] NOT NULL IDENTITY,
        [Name] [nvarchar](max),
        [ReleaseDate] [datetime],
        CONSTRAINT [PK_dbo.Videos] PRIMARY KEY ([Id])
    )
    CREATE TABLE [dbo].[VideoGenres] (
        [Video_Id] [int] NOT NULL,
        [Genre_Id] [int] NOT NULL,
        CONSTRAINT [PK_dbo.VideoGenres] PRIMARY KEY ([Video_Id], [Genre_Id])
    )
    CREATE INDEX [IX_Video_Id] ON [dbo].[VideoGenres]([Video_Id])
    CREATE INDEX [IX_Genre_Id] ON [dbo].[VideoGenres]([Genre_Id])
    ALTER TABLE [dbo].[VideoGenres] ADD CONSTRAINT [FK_dbo.VideoGenres_dbo.Videos_Video_Id] FOREIGN KEY ([Video_Id]) REFERENCES [dbo].[Videos] ([Id]) ON DELETE CASCADE
    ALTER TABLE [dbo].[VideoGenres] ADD CONSTRAINT [FK_dbo.VideoGenres_dbo.Genres_Genre_Id] FOREIGN KEY ([Genre_Id]) REFERENCES [dbo].[Genres] ([Id]) ON DELETE CASCADE
    CREATE TABLE [dbo].[__MigrationHistory] (
        [MigrationId] [nvarchar](150) NOT NULL,
        [ContextKey] [nvarchar](300) NOT NULL,
        [Model] [varbinary](max) NOT NULL,
        [ProductVersion] [nvarchar](32) NOT NULL,
        CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY ([MigrationId], [ContextKey])
    )
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804171912075_InitialModel', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED59CD6EE33610BE17E83B083AB545D6CACF656BD8BB489DA430BA898338097A0B6869EC10A52895A4027B177DB21EFA487D850EF52F52B26523488BB60810D8E4FCCFC7E10CFDE7EF7F8C3EAE43E6BC809034E263F76470EC3AC0FD28A07C357613B57CF7DEFDF8E1EBAF469741B8761E0BBA334D879C5C8EDD67A5E2A1E749FF1942220721F54524A3A51AF851E89120F24E8F8FBFF74E4E3C40112ECA729CD15DC2150D21FD825F2711F721560961D751004CE6EBB8334FA53A37240419131FC6EE230D3E6F06199DEB9C334AD08639B0A5EB10CE2345145A387C90305722E2AB798C0B84DD6F6240BA25611272CB8715795F278E4FB5135EC55888F213A9A2704F81276779543C93FDA0D8BA65D4306E97185FB5D15EA7B11BBB3F0217E8B9A9693861425335E33A48A98F9C74EDA84C3BA243FF1D399384A944C09843A2046147CE6DB260D4FF0936F7D12FC0C73C61AC6E0E1A847B8D055CBA15510C426DEE60991B390D5CC76BF2792663C956E3C93C98727576EA3A37A89C2C1894D9AE793B579100740E045110DC12A540702D03D27859DA0D5DFA7FA10DE18567C475AEC9FA13F0957A1EBBF8D175AEE81A826225B7E081533C52C8A4440296921BF24257A97D863A0C3F4408F23B60E9B67CA67186F541BAF594A60909AE4414DE45AC60C9D79FEE8958814283A396CD799408DF3066E455B8D98AA654526F34A5D4FFA3E96DD0642841EC009170811616BAF4E77B1AEE01C402678702B1C05A2B100B94F601E2B994914F531BEA482CF437DDB9E481B3CD982CF0A513187C04228D117AA879EC7E67C5A7436079CC2A8179B5DD2A70E4D5BCB14F1BDE898A50C456E5E8E77411D6AAE5E4E185971F3E9903C3B45D0B9D8332525AC5B969BAE57A93BD284D167B1E4A83BDE6A921A3844E8DA40D5AE671DF91DCD2DECA54AFA788229D3511858D663569BAD582DF32895547E3652D4DD1FA781DBDCFE89AC43196845A2F94AF38F3AC119ABC9BEFDF2784990CCF972DED42696DA9090B1C5981B18BAAD1D22B2AA4C25242164417A549105A640DC876E0A950D540A59DA9026505B9FE5C3B178DBEC564AF427785DE84589C53C7C04CB0CD9736A08411D1724B4C229684BCEBA6D9C69DD5FD3A7FB6624B187986E166603C2B320642CD38F7CA427E620ECE425603F6CF4207DFDF9D852E098DABB52EA8B1F1F6596D56A596D49635775BFE4AA2D62CB51E185D51DB5A58A338DB01E995DE4C545B9275404AC57BDA9457FB036D4A85EC6993796DD839B46E0F93A44450798B18B7C528AFDCBBC769AB946724AE83B6BF60A0B08CCF37524138D00483F9AF6CC22862B622B8269C2E41AAAC5977F1A6796FCCE5FF9C19D99332607D06E5371F37A80EE9CE81C29A46FA4F18FC8508FF99886F42B2FEB62EC99E22F61C03FFD3B1EA357105F859A513D7EB85FD609C6EA9A336715781DB9DAE4A4D2D69D6D832E501ACC7EE979469E84C7F7E2AF88E9C99C0EA32748E9DDFF64E6665F67ECA0BBE3D941F36AAB6DE85E644B27B463DB1AEE019BF40FC2970CEFDACC84E88F44960474CDF4F5BB5E783A069429FD156BFF0C212843E8A84E1352695C08BCC6A746E05E53E8D096B786DDFC57D0A8876A99467EE5C400C5C5706DBC13EDAB6B51EA56823BCBB02D039FEEF004E5BC3524B9D9DB5D684FDCB80D33F956F0B9C6DFDE1AB03A7FDDDC89ED57B3C0C75BF0B65ED215E690B5D9EB2AAD8F13CD2FA66D4FD64D426B9FDEDA65D7297E1F5CD4E1D1D2EEC7CB72A1F9CB63F5F758C3E76C1B7A6E19DCF560DB7CD01ADFF8B552F678BA7B11DCEB6CF547691B21E60DECAD93D9EE7EC410A4F68EDD74BAC1092AE2A11FAB74C0E7EE36C963453BE8C8A2261585490188DCC352882DD2339178A2E89AF70DB0729D3DF0A1E094B90E4325C4030E5B344C5894297215CB0C66F0FBAD46CD39FBE41366D1ECDE2F49DFF355C4033A96E8067FC8784B2A0B4FBAAA597EA10A16B58DEEAEB5C2ADDF2AF36A5A49B88F7149487AF2CBDF710C60C85C9199F931738C4B607099F6045FC4D310F770BD99D8866D8471794AC0409652EA3E2C7AF88E1205C7FF80BDEF2F832C41F0000 , N'6.1.3-40302')
END

IF @CurrentMigration < '201804171914397_PopulateTableGenresAndTableVideos'
BEGIN
    INSERT INTO Genres (Name) VALUES ('Action')
    INSERT INTO Genres (Name) VALUES ('Drama')
    INSERT INTO Videos (Name, ReleaseDate) VALUES ('The Dark Knight', '2008-07-17')
    INSERT INTO Videos (Name, ReleaseDate) VALUES ('Schindlers List', '1994-02-24')
    INSERT INTO VideoGenres (Video_Id, Genre_Id) VALUES (1, 1)
    INSERT INTO VideoGenres (Video_Id, Genre_Id) VALUES (2, 2)
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804171914397_PopulateTableGenresAndTableVideos', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED59CD6EE33610BE17E83B083AB545D6CACF656BD8BB489DA430BA898338097A0B6869EC10A52895A4027B177DB21EFA487D850EF52F52B26523488BB60810D8E4FCCFC7E10CFDE7EF7F8C3EAE43E6BC809034E263F76470EC3AC0FD28A07C357613B57CF7DEFDF8E1EBAF469741B8761E0BBA334D879C5C8EDD67A5E2A1E749FF1942220721F54524A3A51AF851E89120F24E8F8FBFF74E4E3C40112ECA729CD15DC2150D21FD825F2711F721560961D751004CE6EBB8334FA53A37240419131FC6EE230D3E6F06199DEB9C334AD08639B0A5EB10CE2345145A387C90305722E2AB798C0B84DD6F6240BA25611272CB8715795F278E4FB5135EC55888F213A9A2704F81276779543C93FDA0D8BA65D4306E97185FB5D15EA7B11BBB3F0217E8B9A9693861425335E33A48A98F9C74EDA84C3BA243FF1D399384A944C09843A2046147CE6DB260D4FF0936F7D12FC0C73C61AC6E0E1A847B8D055CBA15510C426DEE60991B390D5CC76BF2792663C956E3C93C98727576EA3A37A89C2C1894D9AE793B579100740E045110DC12A540702D03D27859DA0D5DFA7FA10DE18567C475AEC9FA13F0957A1EBBF8D175AEE81A826225B7E081533C52C8A4440296921BF24257A97D863A0C3F4408F23B60E9B67CA67186F541BAF594A60909AE4414DE45AC60C9D79FEE8958814283A396CD799408DF3066E455B8D98AA654526F34A5D4FFA3E96DD0642841EC009170811616BAF4E77B1AEE01C402678702B1C05A2B100B94F601E2B994914F531BEA482CF437DDB9E481B3CD982CF0A513187C04228D117AA879EC7E67C5A7436079CC2A8179B5DD2A70E4D5BCB14F1BDE898A50C456E5E8E77411D6AAE5E4E185971F3E9903C3B45D0B9D8332525AC5B969BAE57A93BD284D167B1E4A83BDE6A921A3844E8DA40D5AE671DF91DCD2DECA54AFA788229D3511858D663569BAD582DF32895547E3652D4DD1FA781DBDCFE89AC43196845A2F94AF38F3AC119ABC9BEFDF2784990CCF972DED42696DA9090B1C5981B18BAAD1D22B2AA4C25242164417A549105A640DC876E0A950D540A59DA9026505B9FE5C3B178DBEC564AF427785DE84589C53C7C04CB0CD9736A08411D1724B4C229684BCEBA6D9C69DD5FD3A7FB6624B187986E166603C2B320642CD38F7CA427E620ECE425603F6CF4207DFDF9D852E098DABB52EA8B1F1F6596D56A596D49635775BFE4AA2D62CB51E185D51DB5A58A338DB01E995DE4C545B9275404AC57BDA9457FB036D4A85EC6993796DD839B46E0F93A44450798B18B7C528AFDCBBC769AB946724AE83B6BF60A0B08CCF37524138D00483F9AF6CC22862B622B8269C2E41AAAC5977F1A6796FCCE5FF9C19D99332607D06E5371F37A80EE9CE81C29A46FA4F18FC8508FF99886F42B2FEB62EC99E22F61C03FFD3B1EA357105F859A513D7EB85FD609C6EA9A336715781DB9DAE4A4D2D69D6D832E501ACC7EE979469E84C7F7E2AF88E9C99C0EA32748E9DDFF64E6665F67ECA0BBE3D941F36AAB6DE85E644B27B463DB1AEE019BF40FC2970CEFDACC84E88F44960474CDF4F5BB5E783A069429FD156BFF0C212843E8A84E1352695C08BCC6A746E05E53E8D096B786DDFC57D0A8876A99467EE5C400C5C5706DBC13EDAB6B51EA56823BCBB02D039FEEF004E5BC3524B9D9DB5D684FDCB80D33F956F0B9C6DFDE1AB03A7FDDDC89ED57B3C0C75BF0B65ED215E690B5D9EB2AAD8F13CD2FA66D4FD64D426B9FDEDA65D7297E1F5CD4E1D1D2EEC7CB72A1F9CB63F5F758C3E76C1B7A6E19DCF560DB7CD01ADFF8B552F678BA7B11DCEB6CF547691B21E60DECAD93D9EE7EC410A4F68EDD74BAC1092AE2A11FAB74C0E7EE36C963453BE8C8A2261585490188DCC352882DD2339178A2E89AF70DB0729D3DF0A1E094B90E4325C4030E5B344C5894297215CB0C66F0FBAD46CD39FBE41366D1ECDE2F49DFF355C4033A96E8067FC8784B2A0B4FBAAA597EA10A16B58DEEAEB5C2ADDF2AF36A5A49B88F7149487AF2CBDF710C60C85C9199F931738C4B607099F6045FC4D310F770BD99D8866D8471794AC0409652EA3E2C7AF88E1205C7FF80BDEF2F832C41F0000 , N'6.1.3-40302')
END

IF @CurrentMigration < '201804171938496_ChangedManyGenresPerVideoToOne'
BEGIN
    IF object_id(N'[dbo].[FK_dbo.VideoGenres_dbo.Videos_Video_Id]', N'F') IS NOT NULL
        ALTER TABLE [dbo].[VideoGenres] DROP CONSTRAINT [FK_dbo.VideoGenres_dbo.Videos_Video_Id]
    IF object_id(N'[dbo].[FK_dbo.VideoGenres_dbo.Genres_Genre_Id]', N'F') IS NOT NULL
        ALTER TABLE [dbo].[VideoGenres] DROP CONSTRAINT [FK_dbo.VideoGenres_dbo.Genres_Genre_Id]
    IF EXISTS (SELECT name FROM sys.indexes WHERE name = N'IX_Video_Id' AND object_id = object_id(N'[dbo].[VideoGenres]', N'U'))
        DROP INDEX [IX_Video_Id] ON [dbo].[VideoGenres]
    IF EXISTS (SELECT name FROM sys.indexes WHERE name = N'IX_Genre_Id' AND object_id = object_id(N'[dbo].[VideoGenres]', N'U'))
        DROP INDEX [IX_Genre_Id] ON [dbo].[VideoGenres]
    ALTER TABLE [dbo].[Videos] ADD [Genre_Id] [int]
    UPDATE Videos SET Genre_Id = (SELECT Genre_Id FROM VideoGenres WHERE Video_Id = Id)
    CREATE INDEX [IX_Genre_Id] ON [dbo].[Videos]([Genre_Id])
    ALTER TABLE [dbo].[Videos] ADD CONSTRAINT [FK_dbo.Videos_dbo.Genres_Genre_Id] FOREIGN KEY ([Genre_Id]) REFERENCES [dbo].[Genres] ([Id])
    DROP TABLE [dbo].[VideoGenres]
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804171938496_ChangedManyGenresPerVideoToOne', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED59CB6EE33614DD17E83F085AB545C672329BA961CF207592C2E8E4813809BA0B68E9DA214A912A4905F60CFA655DF493FA0BBDD45BA4ECC846272DD02240E090F77D0FEFC3F9F3F73FC61FD631F39E412A2AF8C43F1E0C7D0F782822CA57133FD5CB37EFFC0FEFBFFE6A7C1EC56BEFA1A47B6BE89093AB89FFA475320A02153E414CD420A6A1144A2CF52014714022119C0C87DF07C7C701A0081F6579DEF836E59AC690FD817F4E050F21D12961972202A68A73BC996752BD2B12834A480813FF81469F36839CCEF74E192568C31CD8D2F708E742138D168EEE15CCB5147C354FF080B0BB4D0248B7244C4161F9A826EFEBC4F0C43811D48CA5A830555AC47B0A3C7E5B4425B0D90F8AAD5F450DE3768EF1D51BE37516BB89FF2370899EDB9A4653260D553BAE838CFAC8CBCE8EAAB4233ACCCF91374D994E254C38A45A1276E4DDA40B46C39F6073277E013EE129634D73D020BC6B1DE0D18D140948BDB9856561E42CF2BDA0CD17D88C155B8327F760C6F5DB13DFBB42E564C1A0CA76C3DBB91612D0399044437443B406C98D0CC8E2E568B77499DFA5368417BE11DFBB24EB8FC057FA69E2E347DFBBA06B88CA93C2827B4EF14921939629384AAEC8335D65F659EA30FC2010E4B7C0B26BF544931CEB83ECEAB148EA8514F1AD6025477EFC7847E40A349A2BDCBBB948656859320E6AD0EC845226A8379432EAFFA1F43A50B2942070802838430B4B5DE6F31D8DF7406101B2C3405802AD0B842540FB80F0542911D2CC80260A0BE56D4FCE79E4EDB0240F79653F861D214813041DEA9DF8DF3991E996573DAF5A5E1189B6BCE160706CFBD8F0C67D69D80C35A188ABDAD14FD921AC75C7ABC34E573C3C5580C2B6DE089D836EA6138B4A1DE7B6F58EF36DF6B22639EC45302DF686A7968C12370D8A0E58D90F7D776E2B636B3B837E12CA6C36249481B2AB48DBA50EEC5609ACC798209F63CA7927D832F08C2F49926029680C40C58937CFA79FE99BF9FEC3419CCB0842D5312354D6569AB0B0911558B7A81A2DBDA052692C2164414C319A46B143D682EB162C95AA5A8874135522AC24379F1B6FA235ACD8EC75E82ED09B188B72E618D80976F9B2A99330223BBAC354B034E6DB3ACC2EEEBCDE37F9F31357C238B00CB703133891B1106AC7B957168A07737016F2F7BF7F16B6F0FDD359D826A1D5529B825A17AF9FD57655EA486D596F77A5AFA4E995235349BB06D676457503D12BADB98CAEE49A40547AF733A96813079AB4B7315804239A4D2C336526C96A86EBE3A8DD67DCA43BEDC626A92057B51DABBD8C8B52FFF2D2EDD4FE9CC4F7D0F7678C30D6FDF946698807866030FF954D194590D7049784D325289D4FF53EB6A677D6F6FEEFD9A403A522D6679D7EF5BD849A90BEB879386B4BFF55843F13193E11F94D4CD6DF3625B9EBC69EFBE27F3A56BD56B3083FEB6C35DB4F545D421A8E3B7BC28C47B09EF89F33A69137FBF9B1E43BF2AE25BED09137F47E3B2CE5876D678D86B4DF02E54EF187AC758833900606846109555A621175BAF20D6EE6214D086BD9EC76903EE035F1ABE4D93767900037A86CB9D547D1AE565949B55ED14BBEEFB9A2BAAB418F1D74FB0A9A37177C100B93D81C8C5BB6B1CEF574FB76DA25B97B53FC829B6BCBFBC626F2E2AEEA2EB85F663B75C702444CE31B7B04ABA2AB5A84997438842DAC543433BE1425682D8B4A12AB9E5D8226580BC9A9D47449428DD72128957D45F640588A24E7F102A219BF4E75926A7419E2056B7DE566A0BF4B7FB682B76D1E5F27D9F75B7F870B682635E5FC9AFF90521655765FB83D669B08F3A68AC66572A94D035B6D2A495782F7145484AF2A057710270C85A96B3E27CF70886DF70A3EC28A849B72BADB2EE4E544B4C33E3EA3642549AC0A1935BFF92F5460FE0DF5FE2F32384AF2B81A0000 , N'6.1.3-40302')
END

IF @CurrentMigration < '201804171947118_AddColumnClassificationToVideoTable'
BEGIN
    ALTER TABLE [dbo].[Videos] ADD [Classification] [int] NOT NULL DEFAULT 0
    UPDATE Videos SET Classification = 1
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804171947118_AddColumnClassificationToVideoTable', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED595B6FDB36147E1FB0FF20E8691B522B97972EB05B746E5218AB93204A8ABD15B474EC10A3288DA4027BC37ED91EF693F61776A83B49D996BDB51BB0A1406191E71C9ECBC77361FEF8EDF7F1EB75C2BC671092A67CE29F8D4E7D0F7894C694AF267EAE962F5EFAAF5F7DF9C5F82A4ED6DE879AEE42D321279713FF49A9EC320864F4040991A384462295E9528DA23409489C06E7A7A7DF06676701A0081F6579DEF83EE78A26507CE0E734E511642A276C9EC6C064B58E3B6121D5BB2109C88C4430F13FD0F8E7CDA8A4F3BD378C12D42104B6F43DC279AA88420D2F1F25844AA47C1566B840D8C32603A45B1226A1D2FCB2251F6AC4E9B9362268196B51512E559A1C28F0ECA2F24A60B31FE55BBFF11AFAED0AFDAB36DAEAC27713FF1D708196DB275D4E99D054A65F4705F58957AC9D34614774E87F27DE34672A1730E1902B41D88977972F188DBE87CD43FA23F009CF19EBAA830AE19EB1804B7722CD40A8CD3D2C2B2567B1EF05265F6033366C1D9ED282195717E7BE77838793058326DA1D6B43950A40E3401005F11D510A04D732A0F09773BA7596FEBF3E0DE18577C4F7E664FD1EF84A3D4D7CFCE97BD7740D71BD5269F0C8295E2964522207E7901BF24C57857ED671E87E4811E4F7C08A6DF944B312EBA362EB6315D46B9126F729AB39CAE58F0F44AC40A1BAA9BB17A6B9882C4DC6410B9A9D502A040D865241FD3F943E0F94AC4310384024BC450DEBB3F4EF079AEC659D3222255DD2A84A4895A61A7BF696E3A5A1F8AEE07B1CBC6B08F7C1BB86FE3078E74907DCB6713379CDC8AA2D1D03516F8AF98BF0C7A0C720D80641D285A7E9E539240B109515216558D37DEF0361397E9E393131A8DFA52C6E68CF77D3DEE958A1CB1AFA0BD7CDA543BB8B6FA44C235AF8A29B44AA089BC75DF1D8DB11EE1687551E9AA30B69864EC3E04EFC6F1CF5FBE535D9B19557C1CD94773A1A9DD91676AC711325F6328A50DE38AC88BC5E84B5EA810F362A15826475A76DEDB5D01054F7CE604D68C16C6AEF186FB2D725C561AF9C69B1772CB564D497B343D17377ED3CBD3BB68DB2AD9EC1300975343B126A47D945C034A9274134016CBBD0A06C43EB7635D8D2AF8EE724CBF09276FAD76AC50BCBE675FA223CBCB74B4A1941247B5ABC46DBE624AC4B6405D62E1E8D9A5E5321155600B2203A974DE3C42133E0BA054BF5510622DD40D508ABC9F5EFCE9D307A4D9BBD75DD355A93604D2D0C033BC02E5F31341046444F719FA62C4FF8B60661177759AEBBFCE58A2B611C588ADB8E091CCF5808B5FD3C280AD585393A0AE5FD3F3C0A5BF8FEE9286C936074445D41C6C6707976BBD01569EF7D7EAC98B9AE07307516DF058A9A6650E4757EEE9B62CC3CED3A6210584A197D90D18E68CE3D4CA5AAF81CA9D2C1CA606A8D69D107CDA46E9C9BC67288A176F57283EE14319BA4815C53CCACA235AE0AC8FE9718A7A29424BE87B63FA387B19A841BA92019698251F8139B328A206F09E684D3254855F6BA3E16BC97D693CEBFE7792590326643DE583EFBB04AB54BF78EA3FBA6B41DF3297F26227A22E2AB84ACBFEE4A7267D0031F11FED3BE1A34AFC7F85B15F3FA61A2FAE7F7C2FC03AD6B9351478633C7CC70445D4FFC5F0AA64B6FF6C3C79AEFC4BB1578D72FBD53EFD7E3C073DCF4D8296D870D78EE9471CCD8898805A1014518266389D33D75EBFB9DA03CA2196186CE6E2D1A720DB4FF1A79F6CE5BC8806B7C1B660D396857D16DA45AF7719FED078ED0EEE8326046DE3E2297650AAFD64207B604E39669B1777CDE3E3DF749EE9F643FE1646D58DF9994F6CED2EE00FE69A667B7C140C474FE2084609574D58AD03D1387C8C04A4333E3CBB406ADA5514D62E5B33928825995BC118A2E49A4703B02CC95FA05B67AD3BA4A1610CFF86DAEB25CA1C9902C98F1A2ABA1BFEBFCE289C0D4797C9B158F9C7F8709A826D585E1967F97D3CEDBDDB59BCFB789D077AA2A813A964A97C2D5A6917493F281822AF735A9E001928CA13079CB43F20CC7E8F628E13DAC48B4A9FBC4ED42F607C274FBF82D252B411259C968F9F113311C27EB577F020033D008171D0000 , N'6.1.3-40302')
END

IF @CurrentMigration < '201804181650414_AddedFluentAPIConfigurationToVideosTableAndGenresTable'
BEGIN
    ALTER TABLE Videos DROP CONSTRAINT DF__Videos__Classifi__08EA5793
    IF EXISTS (SELECT name FROM sys.indexes WHERE name = N'IX_Genre_Id' AND object_id = object_id(N'[dbo].[Videos]', N'U'))
        DROP INDEX [IX_Genre_Id] ON [dbo].[Videos]
    EXECUTE sp_rename @objname = N'dbo.Videos.Genre_Id', @newname = N'GenreId', @objtype = N'COLUMN'
    ALTER TABLE [dbo].[Genres] ALTER COLUMN [Name] [nvarchar](255) NOT NULL
    ALTER TABLE [dbo].[Videos] ALTER COLUMN [Name] [nvarchar](255) NOT NULL
    ALTER TABLE [dbo].[Videos] ALTER COLUMN [Classification] [tinyint] NOT NULL
    ALTER TABLE [dbo].[Videos] ALTER COLUMN [GenreId] [int] NOT NULL
    CREATE INDEX [IX_GenreId] ON [dbo].[Videos]([GenreId])
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804181650414_AddedFluentAPIConfigurationToVideosTableAndGenresTable', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED59DB6EE336107D2FD07F10F45864AD5CB0C0D6B07791F5260BA3EB248892A06F012D8D1DA214A5925460B7E897F5A19FD45FE850A26E94E45B37BB2DB00810D8E4DC3873663843FFFDE75FA377AB8839CF20248DF9D83D191CBB0EF0200E295F8EDD542D5EBD71DFBDFDFEBBD14518AD9C8782EE4CD321279763F749A964E87932788288C841440311CB78A106411C79248CBDD3E3E31FBD93130F50848BB21C67749B724523C8BEE0D749CC0348544AD82C0E8149B38E3B7E26D5B92211C8840430761F68F8DB7A90D3B9CE39A3046DF0812D5C87701E2BA2D0C2E1BD045F89982FFD041708BB5B2780740BC22418CB8715F9AE87383ED587F02AC64254904A15477B0A3C39335EF16CF6837CEB965E43BF5DA07FD55A9F3AF3DDD8FD085CE0C96D4DC309139AAAE9D741467DE4646B4765D8111DFAEFC899A44CA502C61C5225083B726ED239A3C14FB0BE8B7F013EE629637573D020DC6B2CE0D28D8813106A7D0B0B63E434741DAFC9E7D98C255B8D273FC194ABB353D7B942E564CEA08C76EDB4BE8A05E0E1401005E10D510A04D73220F3574BBBA54BFF2FB421BC30475C6746569F802FD5D3D83D7DFDDA752EE90AC262C55870CF29A61432299142878596D62BF24C9799C1967E8C07C488FA5B60D9B67CA2490EFE41B6F568A27C29E2E836660547BEFC7847C41214DA1FB7F7FC38158165C9C8AB50B4115B99A09DB195517FC3D657C296A515910444C20734B950AE3FDFD1682B6B069CED1EDA2C64C2889474410353F7CCF935A2EDAD83B3C624C5614953244657D21409B55BD2A4512D65ECC34DE52523CBEA86DA31979A62FE6552219442106C8DD0CB55BD5F232A9A4E9E413407610EE153869D83EB3C1096E2D79356481AD41F631696B4A79B696F74A8D06325FD59DBCBB93FEB8BE752C601CD5C51AF4C26C04D75173C743644BB82A1296E33F4204DD06718DBB1FB43CBFC6E7965C9ADE419B435E5B55D87850B84AE1C84617724316A94AB7695A33CA00961FDAA2D961D4BA3F67029DCDEF90009705DD5FA1DB88BD6B27EB455971AAC7ABDCD2923AF0681F695853C0A394A9465D9A21761A53A520E7B489375D254573BE45AA80FAA7E20BC9DAB02D00C790B314DF6E2726FB11B045AECB5935A328A8256A3E8A877B6D3372744696C65672B6C9B53A026A170947D1D378FD45154CB00560382974F08C524E1F58C12A31949122C6CB5D1C2AC387E3E574C5EF9FBB7DD512EC30B6447F75D5A5B6AC20E812CC1DA45D568E9251552E1D54BE644D7FF4918B5C81A70EDC152A1AA81C876A00A8415E4FA732D271A634047321BB64B3C4DA4EB40D6FAD8016EF365F31C614474B4599398A511EFAF47FDDC79E354E7CF57DA12469E6578ABF0B43C6321D4F6F34E513009737014F2FCDF3F0A3D7C5F3B0A7D121AAD685D5063637779E5FD5297D57BE9F4CBB15BB5BA387BEF0B63AE55176D92527B591FAD3A38323569FBBB4BAB48E524AE83EE7A46A46181F2D7524134D00403FF57366114CF5B11CC08A70B902A6F395DACA16FAC079CFFCE638A2765C8767951F9E29328D52EDD3A6BEE3986D5874FFE4C44F044447BFCDC2874CFD7826F7EEB15DA319387F859653379252B9FF7F79AD1331FB4FADC29B6DAABB1FB7BC63374A63F3F1AB623E75A60DE0E9D63E78FCF34D9E354B7CEAC38084B870D78A61DDE7F06B31ADA43C6C283C6B8BEB6EB6526B7FFC9B0D66E927798C6FA87B1FCF6C2CC9AEBB8E648EC994B3A07B5FE39AD4B72F7CCF482335CE3F4B59E7CEBD4D61EF55E664E6BF71D8898DAAF42885549979508FD1B1187A081959266CA17718159CBA282C4AA4E3350048B2A39178A2E48A0703B00AC57FAD5D53C395D447308A7FC3A5549AAF0C810CD59E31557437F93FE6C186DDA3CBA4EB227C8CF71043493EA7BE19ABF4F69ED69EDB2A39EF688D039656E431D4BA56FC5E5BA947415F31D0519F795A5E00EA284A13079CD7DF20C87D8762FE1132C49B02EDAC77E21DB03D174FBE803254B4122696454FCF815311C46ABB7FF004366BA721C1D0000 , N'6.1.3-40302')
END

IF @CurrentMigration < '201804181704026_AddedTagsTable'
BEGIN
    CREATE TABLE [dbo].[Tags] (
        [Id] [int] NOT NULL IDENTITY,
        [Name] [nvarchar](max),
        CONSTRAINT [PK_dbo.Tags] PRIMARY KEY ([Id])
    )
    CREATE TABLE [dbo].[VideoTags] (
        [VideoId] [int] NOT NULL,
        [TagId] [int] NOT NULL,
        CONSTRAINT [PK_dbo.VideoTags] PRIMARY KEY ([VideoId], [TagId])
    )
    CREATE INDEX [IX_VideoId] ON [dbo].[VideoTags]([VideoId])
    CREATE INDEX [IX_TagId] ON [dbo].[VideoTags]([TagId])
    ALTER TABLE [dbo].[VideoTags] ADD CONSTRAINT [FK_dbo.VideoTags_dbo.Videos_VideoId] FOREIGN KEY ([VideoId]) REFERENCES [dbo].[Videos] ([Id]) ON DELETE CASCADE
    ALTER TABLE [dbo].[VideoTags] ADD CONSTRAINT [FK_dbo.VideoTags_dbo.Tags_TagId] FOREIGN KEY ([TagId]) REFERENCES [dbo].[Tags] ([Id]) ON DELETE CASCADE
    INSERT [dbo].[__MigrationHistory]([MigrationId], [ContextKey], [Model], [ProductVersion])
    VALUES (N'201804181704026_AddedTagsTable', N'Vidzy.Migrations.Configuration',  0x1F8B0800000000000400ED1ADB6EDB36F47DC0FE41D0D336A4562E28D005768BD4498A60CD057152ECAD6024DA2146519A4805F6867DD91EF649FB851D4A942CF1224B4E9A764551A088499EFB9587FAF7EF7FC66F9631F51E70C649C226FEDE68D7F7300B9388B0C5C4CFC5FCC52BFFCDEBEFBF1B9F44F1D2FB509D3B90E70092F1897F2F447A18043CBCC731E2A3988459C293B91885491CA02809F677777F0EF6F6020C287CC0E579E3EB9C0912E3E207FC9C262CC4A9C8113D4F224CB95A879D5981D5BB4031E6290AF1C4FF40A23F56A3F29CEF1D5182808719A673DF438C250209E0F0F096E399C812B698A5B080E8CD2AC5706E8E28C78AF3C3F5F1BE42ECEE4B21823560852ACCB948E28108F70E9456021D7C2BDDFAB5D6406F27A05FB1925217BA9BF8EF30CB40729DD2E19466F2545BAFA3E2F48E57ACEDD46607EF90FF76BC694E459EE109C3B9C810DDF1AEF23B4AC25FF0EA26F90DB309CB296DB2030CC15E6B0196AEB224C599585DE3B962F22CF2BDA00D17E880355803A694E08C89837DDFBB00E2E88EE2DADA0D696722C9300887332470748584C019933870A12F83BA464BFE5F5103F78218F1BD73B47C8FD942DC4FFCFD972F7DEF942C7154AD280E6E198190022091E5D8C2A146F5023D9045C1B0461FEC8113F0FA6B4C8B6D7E4FD2D2F947C5D64765E5D32C89AF135A4194CB1F6F50B6C002F84FCCBD599267A1C6C938587B51A76F15887AFB5671FA9B6F7D26DFD2A8822761C4F131B05C11977FDF90782368E1389B35D48D644A11E7644E4295F794FCD2A3F5ADADA34605C576415305862D68AA80EACBC80D5A74056FB9ADB321571D5C145B36267A472E60E81DB770F65BD40E8C5AF8B357D43E5901E8F0217BFA6FB9573F1FCAE38607E9517AC64F29A0AC05EDE95C6D348FF433D06E8433BA026B94A4DEAE20BDB5557C8EE33B9C29216684420BEC7B1F10CDE1E79E6190D6E977098DEAB3FBDD67AFA49D4063F5F90353CBA53E9B8B479C27212954D134BCCA546D72272CF23AD2D63A9FAA2A7D0E1A2429E80C6C3BF17F32D8B7E3AB9D678D4FA5CD363E537510CB3893C18428B4F91CAC469830039FB090A488BA496B203DB385D4708D5CDF39C6296632D0DD0AEC43B52E8426E99A8296C23629651C345CA08F671471DF6DC8762179B45FB473CA1A5D51523A9139852B130E2844803AEA102A52815CC44B61C92770D3532985AB6CAAF32D91CEB0685A0B72E43ABBB5FDD910BB0D5E6560035CA9710378999F0DE042691A6843491AF9AA63699CB03434BA3376278A9AD1B588863B77A78606864AC77AE56E8BD45BDC52692E694DD7DFE4FCDBC8DA72F7068292B7DE825655B576F2F5A82328671DD54C24700C45C6E7284DA1B23586246AC59B951392E98BD9F001425CE208426E9923D4DCD694A06B420BACED0269E0F494645CC02502DD21D9004CA3D838D60A6947C054A45A516B5AA90AA4EAB8FCBB91375A030D4B365760A7204D2C0B41D10EEA9E6CC2159329445166693DA709CD63E62E486EE8B2996CC2972B268671A0316E541E43339A87EA7AEE6505152D5B5BA1CC91C3ADE080FBDC567061685DAA9B885A1BFDF1D50D461397B3EB70E3D17BF5263A7DEF8BF139477AEFE971B2B00EF7372BD4E7F6B64FADFF76CDB204BEAAC35DB1AD8E58E3D7A25459656D37DC56B93615D1CB0C05227B57DEA03A8821E74DA417438062183B7A1B615ACDE826F423B5CFD45D85D63D8C5525DFFCEE6294F6F288EF01EF0FA02328EBB31517381EC903A3D9EF744A0978E9FAC03962648EB9286FEA3E741EAFB4079C2FE73125E03CA27D5E549E7DA645A44A374EAD068E619B632CF680B2F01E65E6F8B913E9C0D7826F7A7322B5CCE423F85B1433F9352EEBE4B07B465FE8C0B8419FB1082F27FE9F05CCA177F6EB4705B6E35D6610B787DEAEF7D7134DF60561AB828BA7F125A3A67C559EF4438C963F769B7C58D46DA92E772935CF5AABDC66EDD6248639AA027B94A32A8E87112E80069075D969BB49AF9AFF0C1FC66A538D6DE6805BCD735DD7EF4F33C2FD5F4D6DAD6DEE7043ED19BDF5253B864222B07714965DD414F11045663CC806B4937A319DD419D83CE77DD4F0FFD99CC57E431C92049FD95F6CB79086C5746359ECF415F94A5FEB3DA7A7382F7A4FEE27F607137308DBFD26A16A87EB41A4BCE7410F7A27D35059E11C037EEB6389FBADC486D93E90B7BDA3B89E516C58AD537A2BB776C4EB2D27CF56129FEE0DA765B4C6A87AE34B86F9FCF1A4EF34F5234BD7738D63B4339C5547FEB18D9E9E54C8EA21A85348FBB8484FD5DAD8F139041CF008658E87205D353EDE854CC9C9628D427ECACB70D84A54F59933364FAA74A971541DD17AF3732C10DC7DD15126C81C8502B6430CD74AF9998DFAA0E224BEC3D119BBCC459A0B1019C777B4F5D98ECCBB5DF48B97B636CFE3CBB4F8BAE62944003689BCBE5FB2B739697C38726AB9243850C884AEAE9AD296425E3917AB1AD345C27A2252EAABEBD00D8E530AC8F8259BA107BC0D6FB71CBFC70B14AEAA299F1BC96643B4D53E3E266891A1982B1C6B78F8093E1CC5CBD7FF01780AFCD1C32E0000 , N'6.1.3-40302')
END

